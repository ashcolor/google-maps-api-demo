import { defineStore } from "pinia";
import { Loader, LoaderOptions } from "@googlemaps/js-api-loader";

import { types } from "~~/types";
import { CONSTS } from "~~/utils/constants";
import { utils } from "~~/utils/functions";
import pois from "~~/data/pois.json";

export const useMapStore = defineStore("map", {
  state: () => ({
    // googleオブジェクト
    map: null,
    drawingManager: null,
    objects: [],

    pois: pois,

    // ログオブジェクト
    center: null,
    northEast: null,
    southWest: null,
    zoom: null,

    // 登録状態
    isEditing: false,
    editingObject: null,
    editingGeometry: null as types.GEOMETRY,
  }),
  getters: {},
  actions: {
    //初期化
    async initMap(id: string) {
      const loader = new Loader(
        CONSTS.GOOGLE_MAPS_DEFAULT_OPTIONS as LoaderOptions
      );
      const google = await loader.load();
      const mapOptions = CONSTS.GOOGLE_MAPS_DEFAULT_MAP_OPTIONS;
      this.map = new google.maps.Map(document.getElementById(id), mapOptions);

      this.initDrawingManager();
      this.reloadPois();

      this.center = this.map.getCenter();
      this.zoom = this.map.zoom;

      // Event Listner
      this.map.addListener("bounds_changed", () => {
        const bounds = this.map.getBounds();
        this.northEast = bounds.getNorthEast();
        this.southWest = bounds.getSouthWest();
      });
      this.map.addListener("center_changed", () => {
        this.center = this.map.getCenter();
      });
      this.map.addListener("zoom_changed", () => {
        this.zoom = this.map.zoom;
      });
    },
    initDrawingManager() {
      this.drawingManager = new google.maps.drawing.DrawingManager({
        drawingControl: false,
      });
      this.drawingManager.setMap(this.map);
      // Event Listner
      this.drawingManager.addListener(
        "markercomplete",
        (marker: google.maps.Marker) => {
          this.isEditing = true;
          this.editingObject = marker;
          const position = marker.getPosition();
          this.editingGeometry = {
            type: "Point",
            coordinates: [position.lng(), position.lat()],
          };
        }
      );
      this.drawingManager.addListener(
        "polylinecomplete",
        (polyline: google.maps.Polyline) => {
          this.isEditing = true;
          this.editingObject = polyline;
          const pathArray: Array<google.maps.LatLng> = polyline
            .getPath()
            .getArray();
          this.editingGeometry = {
            type: "Polyline",
            coordinates: pathArray.map((latlng) => [
              latlng.lng(),
              latlng.lat(),
            ]),
          };
        }
      );
      this.drawingManager.addListener(
        "polygoncomplete",
        (polygon: google.maps.Polygon) => {
          this.isEditing = true;
          this.editingObject = polygon;
          const pathArray: Array<google.maps.LatLng> = polygon
            .getPath()
            .getArray();
          this.editingGeometry = {
            type: "Polygon",
            coordinates: [...pathArray, pathArray[0]].map((latlng) => [
              latlng.lng(),
              latlng.lat(),
            ]),
          };
        }
      );
    },

    // ピンの表示
    reloadPois() {
      this.clearPois();
      this.displayPois();
    },
    displayPois() {
      this.pois.forEach((poi) => {
        let object:
          | google.maps.Marker
          | google.maps.Polyline
          | google.maps.Polygon;
        if (poi.geometry.type === "Point") {
          object = this.createMarker(poi);
        } else if (poi.geometry.type === "Polyline") {
          object = this.createPolyline(poi);
        } else if (poi.geometry.type === "Polygon") {
          object = this.createPolygon(poi);
        }
        this.objects.push(object);
        object.setMap(this.map);
      });
    },
    createMarker(poi) {
      return new google.maps.Marker({
        map: this.map,
        position: new google.maps.LatLng(
          poi.geometry.coordinates[1],
          poi.geometry.coordinates[0]
        ),
        label: {
          ...CONSTS.GOOGLE_MAPS_DEFAULT_MARKER_LABEL,
          ...{
            text: String(poi.id),
          },
        },
        icon: utils.svgToBase64DataURL(),
      });
    },
    createPolyline(poi) {
      return new google.maps.Polyline({
        path: poi.geometry.coordinates.map((path) => {
          return { lat: path[1], lng: path[0] };
        }),
        strokeColor: "#666666",
        strokeWeight: 2,
        zIndex: 1,
      });
    },
    createPolygon(poi) {
      new google.maps.Polygon({
        ...CONSTS.GOOGLE_MAPS_DEFAULT_POLYGON_OPTIONS,
        paths: poi.geometry.coordinates.map((path) => {
          return { lat: path[1], lng: path[0] };
        }),
      });
    },
    clearPois() {
      this.objects.forEach((marker) => {
        marker.setMap(null);
      });
      this.objects = [];
    },

    // 新規登録
    setDrawingMode(mode: google.maps.drawing.OverlayType | null) {
      this.drawingManager.setDrawingMode(mode);
    },
    addPoi(name: string, address: string) {
      this.pois.push({
        id: this.pois.length + 1,
        name: name,
        address: address,
        geometry: this.editingGeometry,
      });
      this.reloadPois();
    },
    finishDrawing() {
      this.isEditing = false;
      // TODO setMap(null)が効かない
      this.editingObject.setVisible(false);
      this.editingObject = null;
      this.editingGeometry = null;
    },
  },
});

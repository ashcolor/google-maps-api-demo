import { defineStore } from "pinia";
import { Loader, LoaderOptions } from "@googlemaps/js-api-loader";

import pois from "../data/pois.json";
import damPois from "../data/dams.json";
import { types } from "~~/types";
import { CONSTS } from "~~/utils/constants";
import { utils } from "~~/utils/functions";

export const useMapStore = defineStore("map", {
  state: () => ({
    // googleオブジェクト
    map: null,
    drawingManager: null,
    markers: [],

    // ログオブジェクト
    center: null,
    northEast: null,
    southWest: null,
    clickedLatLngs: null,
    zoom: null,
    pois: pois,

    // 登録状態
    isEditing: false,
    editingType: "",
    editingObject: null,
    editingGeometry: null as types.GEOMETRY,

    //ダム情報オブジェクト
    damPois: damPois,
    damMarkers: [],
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
      this.map.addListener("click", (event: google.maps.MapMouseEvent) => {
        this.clickedLatLngs = event.latLng;
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
        if (poi.geometry.type === "Point") {
          this.displayMarker(poi);
        } else if (poi.geometry.type === "Polyline") {
          this.displayPolyline(poi);
        } else if (poi.geometry.type === "Polygon") {
          this.displayPolygon(poi);
        }
      });
    },
    displayMarker(poi) {
      const marker = new google.maps.Marker({
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
      this.markers.push(marker);
      marker.setMap(this.map);
    },
    displayPolyline(poi) {
      const polyline = new google.maps.Polyline({
        path: poi.geometry.coordinates.map((path) => {
          return { lat: path[1], lng: path[0] };
        }),
        strokeColor: "#666666",
        strokeWeight: 2,
        zIndex: 1,
      });
      polyline.setMap(this.map);
    },
    displayPolygon(poi) {
      const polygon = new google.maps.Polygon({
        ...CONSTS.GOOGLE_MAPS_DEFAULT_POLYGON_OPTIONS,
        paths: poi.geometry.coordinates.map((path) => {
          return { lat: path[1], lng: path[0] };
        }),
      });
      polygon.setMap(this.map);
    },
    clearPois() {
      this.markers.forEach((marker) => {
        marker.setMap(null);
      });
      this.markers = [];
    },

    // 新規登録
    setDrawingMode(mode: string) {
      const drawingMode = {
        default: null,
        marker: google.maps.drawing.OverlayType.MARKER,
        circle: google.maps.drawing.OverlayType.CIRCLE,
        polygon: google.maps.drawing.OverlayType.POLYGON,
        polyline: google.maps.drawing.OverlayType.POLYLINE,
        rectanfle: google.maps.drawing.OverlayType.RECTANGLE,
      };
      this.drawingManager.setDrawingMode(drawingMode[mode]);
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
      this.editingType = "";
      this.editingObject.setMap(null);
      this.editingObject = null;
      this.editingGeometry = null;
    },

    // データ表示
    toggleDamPois(isShow: boolean) {
      if (isShow) {
        if (this.damMarkers.length === 0) {
          this.damPois.features.forEach((dam) => {
            const marker = new google.maps.Marker({
              map: this.map,
              position: new google.maps.LatLng(
                dam.geometry.coordinates[1],
                dam.geometry.coordinates[0]
              ),
            });
            marker.setMap(this.map);
            this.damMarkers.push(marker);
          });
        } else {
          this.damMarkers.forEach((marker) => {
            marker.setVisible(true);
          });
        }
      } else {
        this.damMarkers.forEach((marker) => {
          marker.setVisible(false);
        });
      }
    },
  },
});

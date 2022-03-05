import { defineStore } from "pinia";
import { Loader, LoaderOptions } from "@googlemaps/js-api-loader";

import { types } from "~~/types";

import { CONSTS } from "~~/utils/constants";
import { util } from "~~/utils/util";
import { googleMapsUtil } from "~~/utils/googleMapsUtil";

import SampleFeatureCollection from "~~/data/SampleFeatureCollection.json";

export const useMapStore = defineStore("map", {
  state: () => ({
    // googleオブジェクト
    map: null,
    drawingManager: null,

    // ログオブジェクト
    center: null,
    northEast: null,
    southWest: null,
    zoom: null,

    // 登録状態
    isEditing: false,
    editingOverlay: null,
    editingGeometry: null as types.GEOMETRY,
  }),
  getters: {
    properties: (state) => {
      if (state.map === null) return [];
      let propertiesArray = [];
      state.map.data.forEach((feature) => {
        let properties = [];
        feature.forEachProperty((value, key) => {
          properties[key] = value;
        });
        propertiesArray.push(properties);
      });
      return propertiesArray;
    },
  },
  actions: {
    // Map
    async initMap(id: string) {
      const loader = new Loader(
        CONSTS.GOOGLE_MAPS_DEFAULT_OPTIONS as LoaderOptions
      );
      const google = await loader.load();
      const mapOptions = CONSTS.GOOGLE_MAPS_DEFAULT_MAP_OPTIONS;
      this.map = new google.maps.Map(
        document.getElementById(id),
        mapOptions
      ) as google.maps.Map;

      this.initDrawingManager();
      this.displayFeatures();

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
    displayFeatures() {
      this.map.data.addGeoJson(SampleFeatureCollection);
      this.map.data.setStyle(function (feature: google.maps.Data.Feature) {
        const type = feature.getGeometry().getType();
        let options = JSON.parse(
          JSON.stringify(CONSTS.GOOGLE_MAPS_OVERLAY_DEFAULT)
        );
        if (type === "Point") {
        } else if (
          type === "LineString" ||
          type === "Polygon" ||
          type === "MultiLineString" ||
          type === "MultiPolygon"
        ) {
          if (feature.getProperty("stroke")) {
            options["strokeColor"] = feature.getProperty("stroke");
          }
          if (feature.getProperty("stroke-opacity")) {
            options["strokeOpacity"] = feature.getProperty("stroke-opacity");
          }
          if (feature.getProperty("stroke-width")) {
            options["strokeWeight"] = feature.getProperty("stroke-width");
          }
          if (feature.getProperty("fill")) {
            options["fillColor"] = feature.getProperty("fill");
          }
          if (feature.getProperty("fill-opacity")) {
            options["fillOpacity"] = feature.getProperty("fill-opacity");
          }
        }
        return {
          ...options,
          icon: util.svgToBase64DataURL(),
          label: {
            ...CONSTS.GOOGLE_MAPS_DEFAULT_MARKER_LABEL,
            text: feature.getProperty("id"),
          },
        };
      });
      this.map.data.addListener(
        "click",
        function (event: google.maps.Data.MouseEvent) {
          let center;
          event.feature
            .getGeometry()
            .forEachLatLng((latlng) => (center = latlng));
          const infowindow = new google.maps.InfoWindow({
            position: center,
            content: "test",
          });
          infowindow.open({
            map: this.map,
            shouldFocus: false,
          });
        }
      );
      this.map.data.addListener("mouseover", function (event) {
        event.feature.setProperty("fill-opacity", 1.0);
      });
    },

    // DrawingManager
    initDrawingManager() {
      this.drawingManager = new google.maps.drawing.DrawingManager({
        drawingControl: false,
      });
      this.drawingManager.setMap(this.map);

      // Event Listner
      this.drawingManager.addListener(
        "overlaycomplete",
        (event: google.maps.drawing.OverlayCompleteEvent) => {
          this.editingOverlay = event.overlay;
          this.isEditing = true;
          this.editingGeometry = googleMapsUtil.overlayToGeometry({
            type: event.type,
            overlay: this.editingOverlay,
          });
        }
      );
    },
    setDrawingMode(mode: google.maps.drawing.OverlayType | null) {
      this.drawingManager.setDrawingMode(mode);
    },
    addFeature(name: string, address: string) {
      this.map.data.addGeoJson({
        type: "Feature",
        properties: {
          id: this.properties.length + 1,
          name: name,
          address: address,
        },
        geometry: this.editingGeometry,
      });
    },
    finishDrawing() {
      this.isEditing = false;
      // TODO setMap(null)が効かない
      this.editingOverlay.setVisible(false);
      this.editingOverlay.setMap(null);
      this.editingOverlay = null;
      this.editingGeometry = null;
    },
  },
});

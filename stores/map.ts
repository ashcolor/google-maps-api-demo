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

    // インフォウィンドウ
    infoWindowContent: "",
    activeFeature: null,

    // ログオブジェクト
    center: null,
    northEast: null,
    southWest: null,
    zoom: null,

    // 登録状態
    isEditing: false,
    editingFeatureId: null,
  }),
  getters: {
    features: (state) => {
      if (state.map === null) return [];
      const features = [];
      state.map.data.forEach((feature) => {
        feature.properties = googleMapsUtil.getPropertiesFromFeatureObject(feature);
        features.push(feature);
      });
      return features;
    },
  },
  actions: {
    async initMap(mapDivId: string) {
      const loader = new Loader(CONSTS.GOOGLE_MAPS_LOADER_DEFAULT_OPTIONS as LoaderOptions);
      const google = await loader.load();
      this.map = new google.maps.Map(
        document.getElementById(mapDivId),
        CONSTS.GOOGLE_MAPS_MAP_DEFAULT_OPTIONS
      ) as google.maps.Map;

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

      this.showFeatureCollection(SampleFeatureCollection);
    },
    execCallbackAfterLoadMap(callback: Function) {
      const interval = setInterval(() => {
        console.log("wait");
        if (this.map === null) return;
        clearInterval(interval);
        callback();
      }, 1000);
    },

    showFeatureCollection(featureCollection: GeoJSON.FeatureCollection) {
      this.map.data = new google.maps.Data({
        map: this.map,
        featureFactory: this.featureFactory,
      });
      this.map.data.setStyle(function (feature: google.maps.Data.Feature) {
        if (feature.getGeometry() === null)
          // 描画中のスタイル
          return CONSTS.GOOGLE_MAPS_DATA_STYLE_DEFAULT_OPTIONS;
        const properties = googleMapsUtil.getPropertiesFromFeatureObject(feature);
        const options = googleMapsUtil.geoJsonStylePropertyToGoogleMapsStyleProperty(properties);
        return {
          ...CONSTS.GOOGLE_MAPS_DATA_STYLE_DEFAULT_OPTIONS,
          ...options,
          icon: util.svgToBase64DataURL(),
        };
      });
      this.map.data.addListener(
        "click",
        function (event: google.maps.Data.MouseEvent) {
          this.showInfoWindow(event.feature);
        }.bind(this)
      );
      this.map.data.addGeoJson(featureCollection);
    },

    // 図形描画
    setDrawingMode(mode: null | String) {
      this.map.data.setDrawingMode(mode);
    },
    featureFactory(geometry: google.maps.Data.Geometry) {
      this.isEditing = true;
      // TODO 保存後のDB上のIDを登録する
      this.editingFeatureId = this.features.length + 1;
      return new google.maps.Data.Feature({
        id: this.editingFeatureId,
        geometry: geometry,
      });
    },
    finishSave() {
      this.isEditing = false;
    },

    // InfoWindow
    setInfoWindowContent(content: string) {
      this.infoWindowContent = content;
    },
    showInfoWindow(feature: google.maps.Data.Feature) {
      this.hideInfoWindow();
      this.activeFeature = feature;
      this.map.infowindow = new google.maps.InfoWindow({
        position: googleMapsUtil.getFeatureObjectCenter(feature),
        content: this.infoWindowContent,
      });
      this.map.infowindow.open({
        map: this.map,
        shouldFocus: false,
      });
      this.map.infowindow.addListener("closeclick", () => {
        this.activeFeature = null;
      });
    },
    hideInfoWindow() {
      this.map.infowindow?.close();
      this.activeFeature = null;
    },
  },
});

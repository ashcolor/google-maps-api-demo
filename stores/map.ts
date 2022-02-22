import { defineStore } from "pinia";
import { Loader } from "@googlemaps/js-api-loader";

import pois from "../data/pois.json";
import damPois from "../data/dams.json";

export const useMapStore = defineStore("map", {
  state: () => ({
    map: null,
    drawingManager: null,
    center: null,
    northEast: null,
    southWest: null,
    clickedLatLngs: null,
    zoom: null,
    pois: pois,
    damPois: damPois,
    damMarkers: [],
  }),
  getters: {},
  actions: {
    //初期化
    async initMap(id: string) {
      const loader = new Loader({
        apiKey: "AIzaSyDXxld2WqZDKvaRE-QBd_wdHThk1arProk",
        version: "weekly",
        libraries: ["drawing", "places"],
      });
      const google = await loader.load();
      const mapOptions = {
        center: {
          lat: 35,
          lng: 130,
        },
        zoom: 4,
      };
      this.map = new google.maps.Map(document.getElementById(id), mapOptions);
      this.initDrawingManager();
      this.initPois();

      this.center = this.map.getCenter();
      this.zoom = this.map.zoom;

      //Event Listner
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
    },
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
    initPois() {
      this.pois.forEach((poi) => {
        const marker = new google.maps.Marker({
          map: this.map,
          position: new google.maps.LatLng(poi.position.lat, poi.position.lng),
          label: {
            text: String(poi.id),
            color: "#FFFFFF",
            fontSize: "20px",
          },
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: "#FF0000",
            fillOpacity: 0.8,
            scale: 16,
            strokeColor: "#FF0000",
            strokeWeight: 1.0,
          },
        });
        marker.setMap(this.map);
      });
    },
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

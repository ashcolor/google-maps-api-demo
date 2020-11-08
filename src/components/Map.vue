<template>
  <div>
    <div class="map" ref="googleMap" />
  </div>
</template>

<script>
import { DEFAULT_PIN_STYLE } from "../config/const";
import { mapState } from "vuex";

export default {
  name: "Map",
  data: () => ({
    map: null,
    // drawingManager: null,
  }),
  computed: {
    ...mapState(["google"]),
    google: function() {
      return this.$store.state.google;
    },
    mapConfig: function() {
      return this.$store.state.mapConfig;
    },
    pois: function() {
      return this.$store.state.pois;
    },
    drawingManager: function() {
      return this.$store.state.drawingManager;
    },
  },
  mounted() {
    this.$store.watch(
      (state, getters) => getters.getGoogle,
      (newValue) => {
        if (newValue !== null) {
          this.initializeMap();
        }
      }
    );
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap;
      console.log(this.mapConfig);
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);

      this.$store.commit(
        "setDrawingManager",
        new this.google.maps.drawing.DrawingManager({
          drawingControl: false,
        })
      );
      this.drawingManager.setMap(this.map);

      this.pois.forEach((poi) => {
        var marker = new this.google.maps.Marker({
          map: this.map,
          position: new this.google.maps.LatLng(poi.lat, poi.lng),
          label: {
            text: String(poi.id),
            color: "#FFFFFF",
            fontSize: "20px",
          },
          ...DEFAULT_PIN_STYLE,
        });
        marker.setMap(this.map);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.map {
  width: 100vw;
  height: 100vh;
}
</style>

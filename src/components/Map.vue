<template>
  <GmapMap
    ref="googleMap"
    :center="mapConfig.center"
    :zoom="mapConfig.zoom"
    map-type-id="terrain"
    style="width: 100vw; height: 100vh"
  >
  </GmapMap>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { gmapApi } from 'vue2-google-maps';
import { DEFAULT_PIN_STYLE } from '../config/const';

@Component({
  computed: {
    ...mapState(['mapConfig', 'pois', 'drawingManager']),
  },
})
export default class Map extends Vue {
  map = null;

  get google() {
    return gmapApi();
  }

  mounted() {
    this.$refs.googleMap.$mapPromise.then(map => {
      this.map = map;
      this.initializeDrawingManager();
      this.initPois();
    });
  }

  initializeDrawingManager() {
    this.$store.commit(
      'setDrawingManager',
      new this.google.maps.drawing.DrawingManager({
        drawingControl: false,
      })
    );
    this.drawingManager.setMap(this.map);
  }
  initPois() {
    //ピン描画
    this.pois.forEach(poi => {
      const marker = new this.google.maps.Marker({
        map: this.map,
        position: new this.google.maps.LatLng(poi.position.lat, poi.position.lng),
        label: {
          text: String(poi.id),
          color: '#FFFFFF',
          fontSize: '20px',
        },
        icon: {
          path: this.google.maps.SymbolPath.CIRCLE,
          ...DEFAULT_PIN_STYLE.icon,
        },
      });
      marker.setMap(this.map);
    });
  }
}
</script>

<style lang="scss" scoped></style>

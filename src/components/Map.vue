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
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { gmapApi } from 'vue2-google-maps';
import { DEFAULT_PIN_STYLE } from '../config/const';

@Component({
  computed: {
    ...mapState(['map', 'mapConfig', 'pois', 'drawingManager']),
  },
})
export default class Map extends Vue {
  get google() {
    return gmapApi();
  }

  mounted() {
    // @ts-ignore
    this.$refs.googleMap.$mapPromise.then(map => {
      this.$store.commit('setMap', map);
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
    // @ts-ignore
    this.drawingManager.setMap(this.map);
  }
  initPois() {
    //ピン描画
    // @ts-ignore
    this.pois.forEach(poi => {
      const marker = new this.google.maps.Marker({
        // @ts-ignore
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
      // @ts-ignore
      marker.setMap(this.map);
    });
  }
}
</script>

<style lang="scss" scoped></style>

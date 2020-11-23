<template>
  <b-form-group label="国土数値情報">
    <b-form-checkbox v-model="active" name="check-button" switch stacked>
      平成26年 ダムデータ
    </b-form-checkbox>
  </b-form-group>
</template>

<script lang="ts">
import { Component, Watch, Prop, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { gmapApi } from 'vue2-google-maps';
import DAMS from '../data/dams.json';

@Component({
  computed: {
    ...mapState(['map', 'pois']),
  },
})
export default class Dam extends Vue {
  dams = DAMS;
  markers = [];
  active = false;

  @Watch('active')
  onChangeActiveStatus() {
    if (this.active) {
      this.show();
    } else {
      this.hide();
    }
  }

  get google() {
    return gmapApi();
  }

  //   mounted() {}

  show() {
    if (this.markers.length === 0) {
      this.dams.features.forEach(dam => {
        const marker = new this.google.maps.Marker({
          // @ts-ignore
          map: this.map,
          position: new this.google.maps.LatLng(
            dam.geometry.coordinates[1],
            dam.geometry.coordinates[0]
          ),
          icon: require('../assets/icons/dam.png'),
        });
        // @ts-ignore
        marker.setMap(this.map);
        // @ts-ignore
        this.markers.push(marker);
      });
    } else {
      this.markers.forEach(marker => {
        // @ts-ignore
        marker.setVisible(true);
      });
    }
  }
  hide() {
    if (this.markers.length === 0) return;
    this.markers.forEach(marker => {
      // @ts-ignore
      marker.setVisible(false);
    });
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <div style="">
    <b-button-group size="sm">
      <b-button
        v-for="(btn, idx) in buttons"
        :key="idx"
        :pressed.sync="btn.state"
        variant="outline-primary"
        v-on:click="change(idx)"
      >
        <b-icon :icon="btn.caption" aria-label="Help"></b-icon>
      </b-button>
    </b-button-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { gmapApi } from 'vue2-google-maps';

@Component({
  computed: {
    ...mapState(['drawingManager']),
  },
})
export default class AddToggleButton extends Vue {
  myToggle = false;
  buttons = [
    { caption: 'hand-index', state: true },
    { caption: 'geo-alt', state: false },
    { caption: 'pentagon', state: false },
    { caption: 'slash', state: false },
  ];

  get google() {
    return gmapApi();
  }
  get modes() {
    return this.google
      ? [
          this.google.maps.drawing.OverlayType.DEFAULT,
          this.google.maps.drawing.OverlayType.MARKER,
          this.google.maps.drawing.OverlayType.POLYGON,
          this.google.maps.drawing.OverlayType.POLYLINE,
        ]
      : [];
  }

  change(id: number) {
    this.buttons.forEach((btn, i) => (btn.state = i === id));
    this.$store.commit('changeDrawingMode', this.modes[id]);
  }
}
</script>

<template>
  <div>
    <b-button-group size="sm">
      <b-button v-for="(btn, idx) in buttons" :key="idx" :pressed.sync="btn.state" variant="primary" v-on:click="change(idx)">
        <b-icon :icon="btn.caption" aria-label="Help"></b-icon>
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myToggle: false,
      buttons: [
        { caption: "hand-index", state: true },
        { caption: "geo-alt", state: false },
        { caption: "pentagon", state: false },
        { caption: "slash", state: false },
      ],
    };
  },
  computed: {
    modes: function() {
      return this.$store.state.google
        ? [
            this.$store.state.google.maps.drawing.OverlayType.DEFAULT,
            this.$store.state.google.maps.drawing.OverlayType.MARKER,
            this.$store.state.google.maps.drawing.OverlayType.POLYGON,
            this.$store.state.google.maps.drawing.OverlayType.POLYLINE,
          ]
        : [];
    },
  },
  methods: {
    change(id) {
      this.buttons.forEach((btn, i) => (btn.state = i === id));
      this.$store.commit("changeDrawingMode", this.modes[id]);
    },
  },
};
</script>

<template>
  <div class="btn-group">
    <button
      v-for="(mode, idx) in modes"
      :key="idx"
      @click="setDrawingMode(idx, mode.type)"
      class="btn btn-outline bg-white"
      :class="[idx === selectedMode ? 'btn-active' : '']"
    >
      <i class="fa-solid" :class="mode.icon"></i>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useMapStore } from '@/stores/map'

const selectedMode = ref(0);

const mapStore = useMapStore()

const modes = [
  {
    icon: "fa-arrow-pointer",
    type: 'default',
  },
  {
    icon: "fa-location-dot",
    type: 'marker',
  },
  {
    icon: "fa-vector-square",
    type: 'polygon',
  },
  {
    icon: "fa-wave-square",
    type: 'polyline',
  }
];
const setDrawingMode = (idx: number, type: string) => {
  selectedMode.value = idx;
  const overLayTypes = {
    default: null,
    marker: google.maps.drawing.OverlayType.MARKER,
    polygon: google.maps.drawing.OverlayType.POLYGON,
    polyline: google.maps.drawing.OverlayType.POLYLINE,
  };
  mapStore.setDrawingMode(overLayTypes[type]);
}
</script>

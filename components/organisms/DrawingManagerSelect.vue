<template>
  <div class="btn-group">
    <button
      v-for="(mode, idx) in modes"
      :key="idx"
      @click="setDrawingMode(idx, mode.type)"
      class="btn btn-outline w-12 bg-white"
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
    type: null,
  },
  {
    icon: "fa-location-dot",
    type: 'Point',
  },
  {
    icon: "fa-vector-square",
    type: 'Polygon',
  },
  {
    icon: "fa-wave-square",
    type: 'LineString',
  }
];
const setDrawingMode = (idx: number, type: string) => {
  selectedMode.value = idx;
  mapStore.setDrawingMode(type);
}
</script>

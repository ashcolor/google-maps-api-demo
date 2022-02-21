<template>
  <div class="btn-group">
    <button
      v-for="(mode, idx) in modes"
      :key="idx"
      @click="setMode(idx)"
      class="btn btn-outline bg-white"
      :class="[idx === selectedMode ? 'btn-active' : '']"
    >
      <i class="fa-solid" :class="mode.icon"></i>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useMapStore } from '@/stores/map'

const modes = [
  {
    icon: "fa-arrow-pointer",
    mode: 'default',
  },
  {
    icon: "fa-location-dot",
    mode: 'marker',
  },
  {
    icon: "fa-vector-square",
    mode: 'polygon',
  },
  {
    icon: "fa-wave-square",
    mode: 'polyline',
  }
];
const selectedMode = ref(0);

const mapStore = useMapStore()

const setMode = (id: number) => {
  selectedMode.value = id;
  mapStore.setDrawingMode(modes[id]['mode']);
}
</script>

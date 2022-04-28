<template>
  <div class="btn-group justify-center">
    <button
      v-for="(mode, idx) in modes"
      :key="idx"
      @click="setDrawingMode(idx, mode.type)"
      class="btn btn-outline w-12 p-0 bg-white"
      :class="[idx === selectedMode ? 'btn-active' : '']"
    >
      <Icon :icon="mode.icon" width="24" height="24" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { useMapStore } from "@/stores/map";

const selectedMode = ref(0);

const mapStore = useMapStore();

const modes = [
  {
    icon: "ph:cursor",
    type: null,
  },
  {
    icon: "ph:map-pin",
    type: "Point",
  },
  {
    icon: "ph:polygon",
    type: "Polygon",
  },
  {
    icon: "ph:line-segments",
    type: "LineString",
  },
];
const setDrawingMode = (idx: number, type: string) => {
  selectedMode.value = idx;
  mapStore.setDrawingMode(type);
};
</script>

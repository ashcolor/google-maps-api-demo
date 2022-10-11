<script lang="ts" setup>
import { useMapStore } from "@/stores/map";

const mapStore = useMapStore();
const activeFeature = computed(() => mapStore.activeFeature);
const showInfoWindow = mapStore.showInfoWindow;
const hideInfoWindow = mapStore.hideInfoWindow;

const features = computed(() => {
  const visbleFeatures = [];
  mapStore.features.forEach((feature) => {
    if (feature.getProperty("visible") !== false) {
      visbleFeatures.push(feature);
    }
  });
  return visbleFeatures;
});

const clickedItem = (feature) => {
  if (feature === activeFeature.value) {
    hideInfoWindow();
  } else {
    showInfoWindow(feature);
  }
};
</script>

<template>
  <div class="prose-sm bg-white w-auto h-full m-0 p-1 divide-y divide-slate-200 overflow-y-auto">
    <div class="text-center font-semibold">{{ features.length }} 件のデータがあります</div>
    <div
      v-for="feature in features"
      @click="clickedItem(feature)"
      class="p-2 cursor-pointer"
      :class="feature === activeFeature ? 'bg-secondary' : ''"
    >
      <div class="text-sm text-primary">{{ feature.getId() }} {{ feature.properties.name }}</div>
      <div class="text-xs text-black/50">
        {{ feature.properties.address }}
      </div>
    </div>
  </div>
</template>

<template>
  <div class="prose-sm bg-white w-auto h-auto m-0 p-1 divide-y divide-slate-200">
    <div class="text-center font-semibold">{{ features.length }} 件のデータがあります</div>
    <div
      v-for="feature in features"
      @click="showInfoWindow(feature)"
      class="cursor-pointer"
      :class="feature === activeFeature ? 'bg-secondary' : ''"
    >
      <p class="text-sm text-primary m-2">{{ feature.getId() }} {{ feature.properties.name }}</p>
      <p class="text-xs text-black/50 m-2">{{ feature.properties.address }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMapStore } from '@/stores/map'

const mapStore = useMapStore()
const showInfoWindow = mapStore.showInfoWindow
const activeFeature = computed(() => mapStore.activeFeature)

const features = computed(() => {
  const visbleFeatures = [];
  mapStore.features.forEach(feature => {
    if (feature.getProperty('visible') !== false) {
      visbleFeatures.push(feature);
    }
  });
  return visbleFeatures;
})
</script>

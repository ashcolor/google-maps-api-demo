<template>
  <div class="hidden">
    <div ref="root">
      <p class="text-sm m-2">{{ properties.id }} {{ properties.name }}</p>
      <p class="text-xs text-black/50 m-2">{{ properties.address }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { googleMapsUtil } from '~~/utils/googleMapsUtil';

import { useMapStore } from '@/stores/map'
const mapStore = useMapStore()
const activeFeature = computed(() => mapStore.activeFeature)
const setInfoWindowContent = mapStore.setInfoWindowContent

const root = ref(null)
const properties = computed(() => {
  setInfoWindowContent(root)
  if (activeFeature.value === null) return [];
  return googleMapsUtil.getPropertiesFromFeatureObject(activeFeature.value)
});
</script>

<style lang="scss" scoped></style>

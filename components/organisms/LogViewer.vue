<template>
  <div class="text-xs">
    <p>position</p>
    <p>Center:{{ center }}</p>
    <p>Nouth East:{{ northEast }}</p>
    <p>South West:{{ southWest }}</p>
    <p>zoom:{{ zoom }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useMapStore } from '@/stores/map'

const mapStore = useMapStore()
const center = computed(() => mapStore.center);
const northEast = computed(() => mapStore.northEast);
const southWest = computed(() => mapStore.southWest);
const zoom = computed(() => mapStore.zoom);
</script>

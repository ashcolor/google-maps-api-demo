<template>
  <div class="text-xs">
    <p>center</p>
    <p>Latitude:{{ centerLat }}</p>
    <p>Longitude:{{ centerLng }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useMapStore } from '@/stores/map'

const mapStore = useMapStore()
const centerLat = computed(() => mapStore.centerLat);
const centerLng = computed(() => mapStore.centerLng);
</script>

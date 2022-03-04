<template>
  <div class="prose-sm bg-base-100 w-auto h-auto rounded-box m-0 p-1 divide-y divide-slate-200">
    <div v-for="properties in mapStore.properties">
      <p class="text-sm m-2">{{ properties.id }} {{ properties.name }}</p>
      <p class="text-xs text-black/50 m-2">{{ properties.address }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMapStore } from '@/stores/map'

const mapStore = useMapStore()
const map = ref(mapStore.map)
// const features = computed(mapStore.properties)
</script>

<style lang="scss" scoped></style>

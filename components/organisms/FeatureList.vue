<template>
  <div class="prose-sm bg-white w-auto h-auto m-0 p-1 divide-y divide-slate-200">
    <div class="text-center font-semibold">{{ mapStore.features.length }} 件のデータがあります</div>
    <div
      class="cursor-pointer"
      v-for="feature in mapStore.features"
      @click="showInfoWindow(feature)"
    >
      <p class="text-sm text-primary m-2">{{ feature.properties.name }}</p>
      <p class="text-xs text-black/50 m-2">{{ feature.properties.address }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { useMapStore } from '@/stores/map'
const mapStore = useMapStore()
const showInfoWindow = mapStore.showInfoWindow

</script>

<style lang="scss" scoped></style>

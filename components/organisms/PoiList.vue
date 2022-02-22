<template>
  <div class="prose-sm bg-base-100 w-auto h-auto rounded-box m-0 p-1 divide-y divide-slate-200">
    <div :pois="pois" v-for="poi in pois">
      <p class="text-sm m-2">{{ poi.id }} {{ poi.name }}</p>
      <p class="text-xs text-black/50 m-2">{{ poi.address }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMapStore } from '@/stores/map'

const mapStore = useMapStore()
const pois = ref(mapStore.pois)
</script>

<style lang="scss" scoped></style>

<template>
  <div class="prose-sm px-3 py-2">
    <div :pois="pois" v-for="poi in pois">
      <div>
        <h4>{{ poi.id }} {{ poi.name }}</h4>
        <p>{{ poi.address }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMapStore } from '@/stores/map'

const mapStore = useMapStore()
const pois = ref(mapStore.pois)
</script>

<style lang="scss" scoped></style>

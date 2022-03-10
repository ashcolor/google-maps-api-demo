<template>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">フリーワード</span>
    </label>
    <input
      v-model="searchWord"
      @change="execSearch"
      id="search-input"
      type="text"
      placeholder="フリーワードで探す"
      class="input input-bordered w-full max-w-xs"
    />
  </div>
</template>

<script lang="ts" setup>
import { useMapStore } from '@/stores/map'
const mapStore = useMapStore()
const features = computed(() => mapStore.features)
const searchWord = ref('')

const execSearch = () => {
  features.value.forEach(feature => {
    let isVisible = false
    Object.keys(feature.properties).forEach(key => {
      if (feature.properties[key].toString().indexOf(searchWord.value) !== -1) {
        isVisible = true
      }
    })
    const dataFeature = mapStore.map.data.getFeatureById(feature.getId())
    dataFeature.setProperty('visible', isVisible)
  });
}
</script>

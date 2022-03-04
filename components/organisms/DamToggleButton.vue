<template>
  <div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text">平成26年 ダムデータ</span>
      <input
        type="checkbox"
        class="toggle toggle-primary"
        @click="clicked()"
        v-model="isChecked"
        :disabled="map === null"
      />
    </label>
  </div>
</template>

<script lang="ts" setup>
import { useMapStore } from '@/stores/map'
import damPoisData from "~~/data/dams.json";

const isChecked = ref(false);

const mapStore = useMapStore()
const map = computed(() => mapStore.map);

const damPois = damPoisData;
const damMarkers: Array<any> = [];

const clicked = () => {
  if (!isChecked.value) {
    displayDams()
  } else {
    deleteDams();
  }
}

const displayDams = () => {
  damPois.features.forEach((dam) => {
    const marker = new google.maps.Marker({
      map: map.value,
      position: new google.maps.LatLng(
        dam.geometry.coordinates[1],
        dam.geometry.coordinates[0]
      ),
    });
    marker.setMap(map.value);
    damMarkers.push(marker);
  });
}

const deleteDams = () => {
  damMarkers.forEach((marker) => {
    marker.setMap(null);
  });
}
</script>

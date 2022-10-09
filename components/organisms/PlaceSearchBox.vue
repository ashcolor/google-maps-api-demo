<script lang="ts" setup>
import { useMapStore } from "@/stores/map";
const mapStore = useMapStore();
const execCallbackAfterLoadMap = mapStore.execCallbackAfterLoadMap;

onMounted(() => {
  execCallbackAfterLoadMap(initAutocomplete);
});

const initAutocomplete = () => {
  const input = document.getElementById("search-input") as HTMLInputElement;
  const searchBox = new google.maps.places.SearchBox(input);

  mapStore.map.addListener("bounds_changed", () => {
    searchBox.setBounds(mapStore.map.getBounds() as google.maps.LatLngBounds);
  });

  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) return;

    const bounds = new google.maps.LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) return;

      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    mapStore.map.fitBounds(bounds);
  });
};
</script>

<template>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">地名・駅名</span>
    </label>
    <input
      id="search-input"
      type="text"
      placeholder="地名・駅名で探す"
      class="input input-bordered w-full max-w-xs"
    />
  </div>
</template>

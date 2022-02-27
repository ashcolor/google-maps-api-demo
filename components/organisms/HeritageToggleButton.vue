// 世界文化遺産
// https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-A34-v1_2.html

<template>
  <div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text">文化遺産</span>
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
import poiData from "~~/data/heritage.json";

const isChecked = ref(false);

const mapStore = useMapStore()
const map = computed(() => mapStore.map);

const damPois = poiData;
const objects: Array<any> = [];

const clicked = () => {
  if (!isChecked.value) {
    displayDams()
  } else {
    deleteDams();
  }
}

const displayDams = () => {
  damPois.features.forEach((feature) => {
    const object = featureToGMapObject(feature);
    if (object !== false) {
      object.setMap(map.value);
      objects.push(object);
    }
  }
  )
}

const featureToGMapObject = (feature) => {
  const type = feature.geometry.type;
  if (type === "Point") {
    return new google.maps.Marker({
      position: new google.maps.LatLng(
        feature.geometry.coordinates[1],
        feature.geometry.coordinates[0]
      ),
    });
  } else if (type === "LineString") {
    return new google.maps.Polyline({
      path: feature.geometry.coordinates.map((path) => {
        return { lat: path[1], lng: path[0] };
      }),
    });
  } else if (type === "Polygon") {
    return new google.maps.Polygon({
      paths: feature.geometry.coordinates.map((paths) => {
        return paths.map((path) => {
          return { lat: path[1], lng: path[0] };
        });
      }),
    });
  } else {
    return false;
  }
}

const deleteDams = () => {
  objects.forEach((object) => {
    object.setMap(null);
  });
}
</script>

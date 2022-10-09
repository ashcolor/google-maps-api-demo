<template>
  <div class="w-full h-full">
    <TopHeaderVue></TopHeaderVue>
    <main class="w-full h-full">
      <div class="w-full h-full flex">
        <!-- 左 -->
        <div class="prose flex-none w-72 p-4 bg-base-200">
          <div class="w-fit mx-auto">
            <DrawingManagerSelect></DrawingManagerSelect>
            <div class="divider"></div>
            <PlaceSearchBox></PlaceSearchBox>
            <FeatureSearchBox></FeatureSearchBox>
            <div class="divider"></div>
          </div>
        </div>
        <!-- 中央 -->
        <div class="grow relative">
          <div id="map" class="w-full h-full"></div>
          <div class="absolute z-10 bottom-10 left-2 bg-white bg-opacity-50">
            <LogViewerVue></LogViewerVue>
          </div>
          <InfoWindow></InfoWindow>
        </div>
        <!-- 右 -->
        <div class="prose flex-none w-72 p-4 bg-base-200">
          <FeatureList></FeatureList>
        </div>
      </div>
    </main>
    <RegisterModal></RegisterModal>
  </div>
</template>

<script setup lang="ts">
import TopHeaderVue from "~~/components/organisms/TopHeader.vue";
import LogViewerVue from "~~/components/organisms/LogViewer.vue";
import DrawingManagerSelect from "~~/components/organisms/DrawingManagerSelect.vue";
import FeatureList from "~~/components/organisms/FeatureList.vue";
import RegisterModal from "~~/components/organisms/RegisterModal.vue";
import InfoWindow from "~~/components/organisms/InfoWindow.vue";
import PlaceSearchBox from "~~/components/organisms/PlaceSearchBox.vue";
import FeatureSearchBox from "~~/components/organisms/FeatureSearchBox.vue";

import { useMapStore } from "@/stores/map";

onMounted(() => {
  const mapStore = useMapStore();
  mapStore.initMap("map");
});
</script>

<style>
html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
}
/* リストクリック時にマップにblue borderが表示される */
div.gm-style > div {
  border: none !important;
}
</style>
<style scoped>
main {
  width: 100%;
  height: calc(100% - 64px);
}
</style>

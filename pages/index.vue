<template>
	<TopHeaderVue></TopHeaderVue>
	<main class="w-full h-full">
		<div class="w-full h-full flex">
			<!-- 左 -->
			<div class="prose flex-none w-72 p-4 bg-slate-100">
				<h3>モード切替</h3>
				<DrawingManagerSelect></DrawingManagerSelect>
				<h3>国土数値情報</h3>
				<DamToggleButton></DamToggleButton>
				<h3>文化遺産</h3>
				<HeritageToggleButton></HeritageToggleButton>
			</div>
			<!-- 中央 -->
			<div class="grow relative">
				<div id="map" class="w-full h-full bg-slate-50"></div>
				<div class="absolute z-10 bottom-10 left-2 bg-white bg-opacity-50">
					<LogViewerVue></LogViewerVue>
				</div>
			</div>
			<!-- 右 -->
			<div class="prose flex-none w-72 p-4 bg-slate-100">
				<h3>データ一覧</h3>
				<PoiList></PoiList>
			</div>
		</div>
	</main>
	<RegisterModal></RegisterModal>
</template>

<script setup lang="ts">
import TopHeaderVue from '~~/components/organisms/TopHeader.vue';
import LogViewerVue from '~~/components/organisms/LogViewer.vue';
import DrawingManagerSelect from '../components/organisms/DrawingManagerSelect.vue'
import { useMapStore } from '@/stores/map'
import PoiList from '~~/components/organisms/PoiList.vue';
import DamToggleButton from '../components/organisms/DamToggleButton.vue';
import RegisterModal from '~~/components/organisms/RegisterModal.vue';
import HeritageToggleButton from '../components/organisms/HeritageToggleButton.vue';

onMounted(() => {
	const mapStore = useMapStore()
	mapStore.initMap('map')
});
</script>

<style>
html,
body,
#__nuxt {
	width: 100%;
	height: 100%;
}
</style>
<style scoped>
main {
	width: 100%;
	height: calc(100% - 64px);
}
</style>

<script lang="ts" setup>
import { useMapStore } from "@/stores/map";
const mapStore = useMapStore();
const addRandomPoint = mapStore.addRandomPoint;

const count = ref(1000);
const isWithinRange = ref(true);
</script>

<template>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">ランダムポイントの追加</span>
    </label>
    <div class="bg-white p-2">
      <div class="w-full">
        <label class="label w-full flex gap-2">
          <span class="label-text">数</span>
          <span> {{ count }}</span>
          <input type="range" min="1" max="10000" class="range range-primary" v-model="count" />
        </label>
      </div>
      <div>
        <label class="label cursor-pointer">
          <span class="label-text">表示範囲内への追加</span>
          <input type="checkbox" v-model="isWithinRange" class="checkbox checkbox-primary" />
        </label>
      </div>
      <button class="btn btn-primary" @click="addRandomPoint(count, isWithinRange)">
        ポリゴンの追加
      </button>
    </div>
  </div>
</template>

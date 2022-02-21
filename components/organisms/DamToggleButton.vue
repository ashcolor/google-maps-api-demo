<template>
  <div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text">平成26年 ダムデータ</span>
      <input type="checkbox" class="toggle toggle-primary" @click="mapStore.toggleDamPois(true)" />
    </label>
  </div>
</template>

<script lang="ts" setup>
import { useMapStore } from '@/stores/map'

const mapStore = useMapStore()
</script>

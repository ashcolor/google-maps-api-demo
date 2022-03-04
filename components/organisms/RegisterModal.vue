<template>
  <!-- Hydration Error at use teleport -->
  <!-- https://github.com/nuxt/framework/issues/1907 -->
  <teleport to="body">
    <div class="modal" :class="[isEditing ? 'modal-open' : '']">
      <div class="modal-box">
        <h3 class="font-bold text-lg">新規登録</h3>
        <div class="form-control">
          <label class="label">
            <span class="label-text">地名</span>
          </label>
          <input type="text" placeholder="地名" class="input input-bordered" v-model="name" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">住所</span>
          </label>
          <input type="text" placeholder="住所" class="input input-bordered" v-model="address" />
        </div>
        <div class="modal-action">
          <label for="my-modal" class="btn" @click="clickSave">保存</label>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { useMapStore } from '@/stores/map'

const mapStore = useMapStore()
const isEditing = computed(() => mapStore.isEditing);
const finishDrawing = mapStore.finishDrawing
const addFeature = mapStore.addFeature;

const name = ref('');
const address = ref('');

const clickSave = () => {
  addFeature(name.value, address.value);
  finishDrawing();
}
</script>

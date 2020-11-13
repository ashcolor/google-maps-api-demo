<template>
  <div>
    <h4 id="sidebar-no-header-title" class="px-3 py-2">Custom header sidebar</h4>

    <div class="px-3 py-2">
      <b-list-group>
        <template :pois="pois" v-for="poi in pois">
          <b-list-group-item :key="poi.id">
            <div class="d-flex w-100 justify-content-between">
              {{ poi.name }}
              <b-badge variant="primary" pill>{{ poi.id }}</b-badge>
            </div>
            <p class="mb-1">
              {{ poi.address }}
            </p>
          </b-list-group-item>
        </template>
      </b-list-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: {
    ...mapState(["pois"]),
  },
})
export default class PoiList extends Vue {}
</script>

<style lang="scss" scoped></style>

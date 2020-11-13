<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Google Maps API Demo</b-navbar-brand>

        <b-navbar-nav>
          <b-nav-item-dropdown :apiList="apiList" v-for="category in apiList" :key="category.name" :text="category.name">
            <b-dropdown-item :api="category.list" v-for="api in category.list" :key="api.key" href="#">{{ api.name }}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-button v-b-toggle.sidebar-1 right>
            <b-icon icon="layout-sidebar-inset" aria-label="Toggle Left Sidebar"></b-icon>
          </b-button>
          <b-button v-b-toggle.sidebar-right right>
            <b-icon icon="layout-sidebar-inset-reverse" aria-label="Toggle Left Sidebar"></b-icon>
          </b-button>
        </b-navbar-nav>
      </b-navbar>
    </div>

    <b-sidebar id="sidebar-1" title="Sidebar" z-index="1" visible no-header shadow>
      <h4 id="sidebar-no-header-title" class="px-3 py-2">Custom header sidebar</h4>

      <div class="px-3 py-2">
        <b-card header-bg-variant="primary" header-text-variant="white" no-body>
          <a v-b-toggle href="#add-body" @click.prevent>
            <b-card-header header-bg-variant="primary" header-text-variant="white">
              新規作成
            </b-card-header>
          </a>
          <b-collapse id="add-body">
            <b-card-body>
              <AddToggleButton />
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-list-group-item>新規追加</b-list-group-item>
        <b-list-group-item>編集</b-list-group-item>
        <b-list-group-item>削除</b-list-group-item>
        <b-list-group-item>検索</b-list-group-item>
      </div>
    </b-sidebar>

    <b-sidebar id="sidebar-right" title="Sidebar" z-index="1" visible no-header right shadow>
      <!-- <PoiList /> -->
    </b-sidebar>

    <Map />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddToggleButton from "./components/AddToggleButton.vue";
import Map from "./components/Map.vue";
import PoiList from "./components/PoiList.vue";

@Component({
  components: {
    AddToggleButton,
    Map,
    PoiList,
  },
})
export default class App extends Vue {
  apiList = {
    map: {
      name: "マップ",
      list: [
        {
          key: "pin",
          name: "ピンの表示",
        },
        {
          key: "polygon",
          name: "ポリゴンの表示",
        },
        {
          key: "style",
          name: "地図切り替え",
        },
      ],
    },
    route: {
      name: "ルート",
      list: [
        {
          key: "search",
          name: "ルート検索",
        },
      ],
    },
    place: {
      name: "プレイス",
      list: [
        {
          key: "search",
          name: "場所の検索",
        },
        {
          key: "geocoding",
          name: "ジオコーディング",
        },
      ],
    },
  };
}
</script>

<style scoped>
nav {
  z-index: 10;
}

#sidebar-1,
#sidebar-right {
  padding-top: 5rem;
}
</style>

<style>
#sidebar-1,
#sidebar-right {
  padding-top: 4rem;
}
</style>

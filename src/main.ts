import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import * as VueGoogleMaps from "vue2-google-maps";
import { API_KEY } from "./config/const.js";

Vue.config.productionTip = true;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueGoogleMaps, {
  load: {
    key: API_KEY,
    libraries: ["drawing"],
  },
  installComponents: true,
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");

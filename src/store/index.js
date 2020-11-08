import Vue from "vue";
import Vuex from "vuex";
import pois from "../data/pois.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    google: null,
    drawingManager: null,
    mapConfig: {
      center: {
        lat: 35.68944,
        lng: 139.69167,
      },
      zoom: 10,
    },
    pois: (function() {
      return pois;
    })(),
  },
  getters: {
    getGoogle: (state) => {
      return state.google;
    },
  },
  mutations: {
    setGoogle(state, google) {
      state.google = google;
    },
    setDrawingManager(state, drawingManager) {
      state.drawingManager = drawingManager;
    },
    changeDrawingMode(state, mode) {
      state.drawingManager.setDrawingMode(mode);
    },
  },
  actions: {
    loadGoogleMapsApi({ commit }, google) {
      commit("setGoogle", google);
    },
  },
  modules: {},
});

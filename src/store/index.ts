import Vue from 'vue';
import Vuex from 'vuex';
import pois from '../data/pois.json';
import { gmapApi } from 'vue2-google-maps';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    google: gmapApi,
    map: null,
    mapConfig: {
      center: {
        lat: 35.68944,
        lng: 139.69167,
      },
      zoom: 10,
    },
    drawingManager: null,
    pois: (function() {
      return pois;
    })(),
  },
  mutations: {
    setMap(state, map) {
      state.map = map;
    },
    setDrawingManager(state, drawingManager) {
      state.drawingManager = drawingManager;
    },
    changeDrawingMode(state, mode) {
      // @ts-ignore
      state.drawingManager?.setDrawingMode(mode);
    },
  },
  actions: {},
  modules: {},
});

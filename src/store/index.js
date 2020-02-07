import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import heroes from './modules/heroes';
import hero from './modules/hero';

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    heroes,
    hero
  },
  plugins: []
});

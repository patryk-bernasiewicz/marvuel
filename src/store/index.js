import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import heroes from './modules/heroes';

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    heroes
  },
  plugins: []
});

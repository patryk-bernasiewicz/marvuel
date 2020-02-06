import { heroes } from '../../mock-data';

export default {
  state: {
    heroes: [],
    isLoading: false,
    error: null,
    page: 1,
    total: null
  },
  getters: {},
  mutations: {
    STORE_HEROES: (state, { heroes, total = 20 }) => {
      state.heroes = [...state.heroes, ...heroes];
      state.total = total;
    },
    SET_LOADING: (state, loading) => {
      state.isLoading = loading;
    },
    SET_ERROR(state, { error }) {
      console.error('Error!', error);
      state.error = error;
    }
  },
  actions: {
    async FETCH_HEROES({ commit }) {
      commit('SET_LOADING', true);

      setTimeout(() => {
        commit('STORE_HEROES', { heroes });
        commit('SET_LOADING', false);
      }, 2000);
    }
  }
};

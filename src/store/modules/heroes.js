import api from '../../api/heroes';

export default {
  state: {
    heroes: [],
    isLoading: false,
    error: null,
    page: 1,
    totalPages: null
  },
  getters: {},
  mutations: {
    STORE_HEROES: (state, heroes) => {
      heroes.forEach(hero => state.heroes.push(hero));
    },
    SET_LOADING: (state, loading) => {
      state.isLoading = loading;
    },
    SET_ERROR(state, { error }) {
      state.error = error;
    },
    NEXT_PAGE(state) {
      state.page++;
    },
    SET_TOTAL_PAGES(state, total) {
      state.totalPages = total;
    }
  },
  actions: {
    async FETCH_HEROES({ commit, state }) {
      return new Promise(async resolve => {
        let page = state.page;

        if (page >= state.totalPages) {
          commit('SET_LOADING', true);

          const cachedHeroes = localStorage.getItem('heroes');
          if (cachedHeroes) {
            const cache = JSON.parse(cachedHeroes);
            if (cache[`page-${page}`]) {
              commit('STORE_HEROES', { heroes: cache[`page-${page}`] });
              commit('SET_LOADING', false);
              commit('NEXT_PAGE');
              resolve();
              return;
            }
          }

          try {
            const heroes = await api.fetchHeroes(page);
            commit('STORE_HEROES', heroes.results);
            commit('NEXT_PAGE');
          } catch (err) {
            commit('SET_ERROR', err);
          } finally {
            commit('SET_LOADING', false);
            resolve();
          }
        }
      });
    }
  }
};

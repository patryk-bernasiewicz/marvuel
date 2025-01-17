import api from '../../api/heroes';

import conf from '@/_conf';

const initialState = {
  heroes: [],
  isLoading: false,
  error: null,
  page: 1,
  totalPages: null,
  end: false,
  search: ''
};

export default {
  state: initialState,
  getters: {},
  mutations: {
    RESET_HEROES: state => {
      state.heroes = [];
      state.isLoading = false;
      state.error = null;
      state.page = 1;
      state.totalPages = null;
      state.end = false;
      state.search = '';
    },
    SET_SEARCH: (state, search) => {
      state.search = search;
    },
    FETCH_PAGE_PENDING: state => {
      state.isLoading = true;
      state.error = null;
    },
    FETCH_PAGE_SUCCESS: (state, data) => {
      data.results.forEach(hero => state.heroes.push(hero));
      if (!state.totalPages) {
        state.totalPages = Math.ceil(data.total / conf.listItems);
      }
      state.error = null;
      state.isLoading = false;
      state.page = state.page + 1;
    },
    FETCH_PAGE_ERROR: (state, error) => {
      state.isLoading = false;
      state.error = error;
    },
    END_OF_PAGES: state => (state.end = true)
  },
  actions: {
    RESET_HEROES({ commit }) {
      return new Promise(resolve => {
        commit('RESET_HEROES');
        resolve();
      });
    },
    async FETCH_HEROES({ commit, state }, search = '') {
      // exit if already loading something or if we reached last page
      if (state.isLoading || state.end) {
        return;
      }

      if (search) {
        commit('SET_SEARCH', search);
      }

      commit('FETCH_PAGE_PENDING');

      try {
        const data = await api.fetchHeroes(state.page, state.search);

        if (data) {
          commit('FETCH_PAGE_SUCCESS', data);

          if (state.page >= state.totalPages) {
            commit('END_OF_PAGES');
          }
        } else {
          await api.clearData();
          commit(
            'FETCH_PAGE_ERROR',
            new Error('No data retrieved! Cache has been erased.')
          );
        }
      } catch (err) {
        commit('FETCH_PAGE_ERROR', err);
      }
    }
  }
};

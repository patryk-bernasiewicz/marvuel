import api from '../../api/heroes';

export default {
  state: {
    heroes: [],
    isLoading: false,
    error: null,
    page: 1,
    totalPages: null,
    end: false
  },
  getters: {},
  mutations: {
    FETCH_PAGE_PENDING: state => {
      console.log('FETCH_PAGE_PENDING', state.page);
      state.isLoading = true;
    },
    FETCH_PAGE_SUCCESS: (state, data) => {
      console.log('FETCH_PAGE_SUCCESS', state.page);
      data.results.forEach(hero => state.heroes.push(hero));
      if (!state.totalPages) {
        state.totalPages = Math.ceil(data.total / 21);
      }
      state.error = null;
      state.isLoading = false;
      state.page = state.page + 1;
    },
    FETCH_PAGE_ERROR: (state, error) => {
      console.log('FETCH_PAGE_ERROR', state.page);
      state.isLoading = false;
      state.error = error;
    },
    END_OF_PAGES: state => (state.end = true)
  },
  actions: {
    async FETCH_HEROES({ commit, state }) {
      // exit if already loading something or if we reached last page
      if (state.isLoading || state.end || state.page >= state.totalPages) {
        return;
      }

      commit('FETCH_PAGE_PENDING');

      await new Promise(resolve => setTimeout(() => resolve(), 5000));

      try {
        const data = await api.fetchHeroes(state.page);

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

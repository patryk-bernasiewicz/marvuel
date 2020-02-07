import api from '../../api/heroes';

export default {
  state: {
    details: null,
    isLoading: false,
    error: null,

    comics: [],
    comicsLoading: false,
    comicsError: null
  },
  getters: {
    /**
     * Get nicely-formatted Hero thumbnail path
     */
    getImagePath: ({ details }) =>
      details && `${details.thumbnail.path}.${details.thumbnail.extension}`,

    /**
     * Get formatted list of Hero's comic sheets
     */
    getComics: ({ comics }) => {
      return comics.map(
        ({ id, title, description, thumbnail, urls, creators }) => ({
          id,
          title,
          description,
          thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
          urls,
          creators
        })
      );
    }
  },
  mutations: {
    DESTROY_DETAILS: state => {
      state.details = null;
      state.isLoading = false;
      state.error = null;
    },
    FETCH_DETAILS_PENDING: state => {
      state.details = null;
      state.isLoading = true;
      state.error = null;
    },
    FETCH_DETAILS_SUCCESS: (state, details) => {
      state.details = details;
      state.isLoading = false;
    },
    FETCH_DETAILS_ERROR: (state, error) => {
      state.error = error;
      state.isLoading = false;
    },

    // Comics-specific
    DESTROY_COMICS: state => {
      state.comics = [];
      state.comicsLoading = false;
      state.comicsError = null;
    },
    FETCH_COMICS_PENDING: state => {
      state.comics = [];
      state.comicsLoading = true;
      state.comicsError = null;
    },
    FETCH_COMICS_SUCCESS: (state, comics) => {
      state.comics = comics;
      state.comicsLoading = false;
    },
    FETCH_COMICS_ERROR: (state, error) => {
      state.comicsError = error;
      state.comicsLoading = false;
    }
  },
  actions: {
    /**
     * Fetch Hero details
     */
    FETCH_DETAILS({ commit }, heroId) {
      return new Promise(async (resolve, reject) => {
        commit('FETCH_DETAILS_PENDING');

        try {
          const data = await api.fetchHeroDetails(heroId);

          if (data) {
            commit('FETCH_DETAILS_SUCCESS', data);
            resolve();
          } else {
            await api.clearData();
            commit(
              'FETCH_DETAILS_ERROR',
              new Error(
                'No data retrieved! Cache has been erased just in case.'
              )
            );
            reject();
          }
        } catch (err) {
          commit('FETCH_DETAILS_ERROR', err);
          reject();
        }
      });
    },

    /**
     * Reset all loaded details data
     */
    DESTROY_DETAILS({ commit }) {
      commit('DESTROY_DETAILS');
    },

    /**
     * Fetch Hero's last 5 comics
     */
    FETCH_COMICS({ commit }, heroId) {
      console.log('[store/modules/hero.js] FETCH_COMICS');
      return new Promise(async (resolve, reject) => {
        console.log('[store/modules/hero.js] FETCH_COMICS in promise');

        commit('FETCH_COMICS_PENDING');

        try {
          const data = await api.fetchHeroComics(heroId, { limit: 6 });
          commit('FETCH_COMICS_SUCCESS', data);
          resolve();
        } catch (err) {
          commit('FETCH_COMICS_ERROR', err);
          reject();
        }
      });
    },

    /**
     * Destroy all loaded comics data
     */
    DESTROY_COMICS({ commit }) {
      commit('DESTROY_COMICS');
    }
  }
};

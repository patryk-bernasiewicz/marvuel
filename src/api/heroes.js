import axios from 'axios';
const { VUE_APP_MARVEL_KEY: API_KEY, VUE_APP_API_URL: API_URL } = process.env;

import conf from '@/_conf';

const api = {
  /**
   * Fetch All hero data
   */
  fetchHeroes: (page = 1) => {
    const limit = conf.listItems;
    const offset = (page - 1) * conf.listItems;

    const _cache = localStorage[`characters-${page}`];
    if (_cache) {
      return Promise.resolve(JSON.parse(_cache));
    }

    return axios
      .get(`${API_URL}/characters`, {
        params: {
          apikey: API_KEY,
          limit,
          offset
        }
      })
      .then(res => res.data.data)
      .then(data => {
        localStorage[`characters-${page}`] = JSON.stringify(data);
        return data;
      });
  },

  /**
   * Fetch single Hero details
   */
  fetchHeroDetails: id => {
    const _cache = localStorage[`details-${id}`];
    if (_cache) {
      return Promise.resolve(JSON.parse(_cache));
    }

    return axios
      .get(`${API_URL}/characters/${id}`, {
        params: {
          apikey: API_KEY
        }
      })
      .then(res => res.data.data.results[0]);
  },

  /**
   * Fetch Hero's comic sheets
   */
  fetchHeroComics: (id, { limit = conf.comicCount }) => {
    const _cache = localStorage[`comics-${id}`];
    if (_cache && _cache.length === limit) {
      return Promise.resolve(JSON.parse(_cache));
    }

    return axios
      .get(`${API_URL}/characters/${id}/comics`, {
        params: {
          apikey: API_KEY,
          limit,
          orderBy: 'focDate'
        }
      })
      .then(res => res.data.data.results);
  },

  /**
   * Clear local cached data
   */
  clearData: () => {
    localStorage.clear();
  }
};

export default api;

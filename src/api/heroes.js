import axios from 'axios';
const { VUE_APP_MARVEL_KEY: API_KEY, VUE_APP_API_URL: API_URL } = process.env;

const PER_PAGE = 21;

const api = {
  fetchHeroes: (page = 1) => {
    const limit = PER_PAGE;
    const offset = (page - 1) * PER_PAGE;

    console.log('fetching page: ', page);

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
  clearData: () => {
    localStorage.clear();
  }
};

export default api;

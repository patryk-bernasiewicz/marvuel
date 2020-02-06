import heroes from '../mock-data';
const { VUE_APP_API_URL } = process.env;

console.log(VUE_APP_API_URL);

export default {
  fetchPage: page => Promise.resolve({ page, results: heroes })
};

import { heroes } from '../mock-data';

const api = {
  fetchHeroes: (page = 1) => {
    console.log('[api/heroes.js] fetchPage', page);
    const results = heroes.map(hero => {
      hero = { ...hero, id: hero.id.toString() + page };
      return hero;
    });
    return Promise.resolve({ results });
  }
};

export default api;

<template>
  <div class="heroes">
    <HomeHeader />

    <main class="my-4">
      <div class="heroes-search container max-w-sm mx-auto text-center">
        <search-field @input="handleSearch" />
      </div>

      <HeroesList />

      <div v-if="store.error" class="text-lg font-extrabold text-red-600">
        Heroes are unreachable at the moment.<br />
        {{ store.error }}
      </div>
    </main>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import SearchField from '@/components/SearchField.vue';

import store from '../store';

export default {
  name: 'heroes',
  data: () => ({
    searchTimer: null
  }),
  components: {
    HomeHeader,
    SearchField,
    HeroesList: () => import('@/components/HeroesList.vue')
  },
  methods: {
    handleSearch(search) {
      clearTimeout(this.searchTimer);
      this.searchTimer = setTimeout(async () => {
        await this.$store.dispatch('RESET_HEROES');
        this.$store.dispatch('FETCH_HEROES', search);
      }, 750);
    }
  },
  computed: {
    store: function() {
      return this.$store.state.heroes;
    }
  },
  store
};
</script>

<template>
  <div class="heroes container mx-auto px-2">
    <ul
      class="heroes-list flex flex-wrap"
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="!store.isLoading"
      infinite-scroll-distance="15"
      infinite-scroll-throttle-delay="450"
    >
      <li
        class="flex flex-wrap w-full sm:w-1/2 md:w-1/3 p-2"
        v-for="hero of store.heroes"
        :key="hero.id"
      >
        <heroes-list-item :hero="hero" />
      </li>
    </ul>

    <p
      v-if="store.isLoading"
      class="heroes-loading flex justify-center items-center my-4 font-extrabold text-lg"
    >
      <loader />
      <span v-if="store.heroes.length">More heroes are coming here!</span>
      <span v-else>First heroes are coming here!</span>
    </p>
  </div>
</template>

<script>
import HeroesListItem from './HeroesListItem.vue';
import Loader from './Loader';

import state from '@/store';

export default {
  data: () => ({ busy: false }),
  components: {
    HeroesListItem,
    Loader
  },
  methods: {
    loadMore: function() {
      this.$store.dispatch('FETCH_HEROES');
    }
  },
  computed: {
    store: function() {
      return this.$store.state.heroes;
    }
  },
  state
};
</script>

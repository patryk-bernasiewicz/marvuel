<template>
  <div class="heroes container mx-auto px-2">
    <ul
      class="heroes-list flex flex-wrap"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="15"
    >
      <li
        class="flex flex-wrap w-full sm:w-1/2 md:w-1/3 p-2"
        v-for="hero of store.heroes"
        :key="hero.id"
      >
        <heroes-list-item :hero="hero" />
      </li>
    </ul>
  </div>
</template>

<script>
import HeroesListItem from './HeroesListItem.vue';

import state from '@/store';

export default {
  data: () => ({ busy: false }),
  components: {
    HeroesListItem
  },
  methods: {
    loadMore: function() {
      this.busy = true;
      this.$store.dispatch('FETCH_HEROES').then(() => {
        this.busy = false;
      });
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

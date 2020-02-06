<template>
  <div class="heroes">
    <HomeHeader />
    <main class="my-4">
      <HeroesList
        v-if="!store.isLoading && !store.error && store.heroes.length"
        :heroes="store.heroes"
      />

      <div v-if="store.isLoading" class="text-lg font-extrabold">
        Heroes are coming...
      </div>

      <div v-if="store.error" class="text-lg font-extrabold text-red-600">
        Heroes are unreachable at the moment.
      </div>
    </main>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HeroesList from '@/components/HeroesList.vue';

import store from '../store';

export default {
  name: 'heroes',
  components: {
    HomeHeader,
    HeroesList
  },
  methods: {},
  created() {
    this.$store.dispatch('FETCH_HEROES');
  },
  computed: {
    store: function() {
      return this.$store.state.heroes;
    }
  },
  store
};
</script>

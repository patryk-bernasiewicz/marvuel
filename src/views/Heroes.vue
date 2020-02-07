<template>
  <div class="heroes">
    <HomeHeader />

    <main class="my-4">
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

import store from '../store';

export default {
  name: 'heroes',
  components: {
    HomeHeader,
    HeroesList: () => import('@/components/HeroesList.vue')
  },
  computed: {
    store: function() {
      return this.$store.state.heroes;
    }
  },
  store
};
</script>

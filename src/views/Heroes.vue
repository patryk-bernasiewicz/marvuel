<template>
  <div class="home">
    <HomeHeader />
    <main class="my-4">
      <HeroesList :heroes="heroes" />
    </main>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HeroesList from '@/components/HeroesList.vue';

import { heroes } from '../mock-data';

export default {
  name: 'heroes',
  data: () => ({ heroes }),
  components: {
    HomeHeader,
    HeroesList
  }
};
</script>

<template>
  <div class="home">
    <HomeHeader />
    <HeroesList />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HeroesList from '@/components/HeroesList.vue';

export default {
  name: 'heroes',
  components: {
    HomeHeader,
    HeroesList
  }
};
</script>

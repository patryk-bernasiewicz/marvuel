<template>
  <div class="home">
    <HomeHeader />
    <main class="my-4">
      <HeroesList />
    </main>
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

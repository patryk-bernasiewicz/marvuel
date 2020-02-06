<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <p>Normalny tekst</p>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';

export default {
  name: 'home',
  components: {
    HomeHeader
  },
  created: () => {
    console.log('`Home` created!');
  },
  mounted: () => {
    console.log('`Home` mounted!');
  },
  updated: () => {
    console.log('`Home` updated!');
  },
  destroyed: () => {
    console.log('`Home` destroyed!');
  }
};
</script>

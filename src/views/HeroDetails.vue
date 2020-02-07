<template>
  <div class="hero">
    <main class="my-4 container mx-auto">
      <div class="mb-4">
        <router-link to="/" class="btn">
          Go back
        </router-link>
      </div>

      <div
        v-if="!state.error && state.isLoading"
        class="hero-loading text-center text-lg font-extrabold flex justify-center items-center"
      >
        <loader />
        <p>Loading details for Hero...</p>
      </div>

      <div
        v-if="!state.loading && state.error"
        class="hero-error text-center text-red-600 font-extrabold text-center"
      >
        <p class="text-lg">Couldn't load the Hero data.</p>
        <p class="text-sm">{{ state.error }}</p>
      </div>

      <div v-if="!state.loading && !state.error && state.details">
        <div class="flex flex-col-reverse px-4 sm:flex-row sm:px-0">
          <div class="hero-image relative w-full mt-4 sm:w-1/2 sm:pr-2 sm:mt-0">
            <img
              :src="this.getImagePath"
              :alt="state.details.name"
              class="w-full"
            />
          </div>
          <div class="hero-desc w-full sm:w-1/2 sm:pl-2">
            <div class="text-left text-4xl font-extrabold mb-2 text-gray-900">
              {{ state.details.name }}
            </div>
            <p v-if="details.description" class="hero-desc text-left text-lg">
              {{ state.details.description }}
            </p>
            <p v-else class="hero-desc-unavailable text-xl">
              Description not available.
            </p>
          </div>
        </div>
      </div>
      <div class="border-gray-900 mt-5 px-4 sm:px-0">
        <hero-comics />
      </div>
      <div class="text-left"></div>
    </main>
  </div>
</template>

<script>
import HeroComics from '@/components/HeroComics.vue';
import Loader from '@/components/Loader.vue';

import store from '../store';

export default {
  name: 'herodetails',
  components: { Loader, HeroComics },
  async mounted() {
    await this.$store.dispatch('FETCH_DETAILS', this.$route.params.id);
    await this.$store.dispatch('FETCH_COMICS', this.$route.params.id);
  },
  computed: {
    state: function() {
      return this.$store.state.hero;
    },
    details: function() {
      return this.state.details;
    },
    getImagePath: function() {
      return this.$store.getters.getImagePath;
    }
  },
  destroyed() {
    this.$store.dispatch('DESTROY_DETAILS');
    this.$store.dispatch('DESTROY_COMICS');
  },
  store
};
</script>

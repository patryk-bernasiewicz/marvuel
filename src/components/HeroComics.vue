<template>
  <div class="comics">
    <div
      v-if="store.comicsLoading"
      class="text-center font-extrabold flex justify-center items-center"
    >
      <loader />
      <p>Comics are being loaded...</p>
    </div>

    <div
      v-if="!store.comicsLoading && store.comicsError"
      class="text-center text-red-600 font-extrabold text-center"
    >
      <p class="text-lg">Couldn't load Hero's comic sheets data.</p>
      <p class="text-sm">{{ store.comicsError }}</p>
    </div>

    <div
      v-if="!store.comicsLoading && !store.comicsError && store.comics.length"
      class="my-3"
    >
      <h4 class="text-left text-xl font-extrabold text-gray-900 mb-1">
        Hero appeared in these {{ Math.min(getComics.length, 6) }} latest comic
        sheets:
      </h4>
      <ul class="comics-list flex flex-wrap">
        <li
          v-for="comic of getComics"
          :key="comic.id"
          class="w-full sm:w-1/6 p-2"
        >
          <comic-preview :comic="comic" />
        </li>
      </ul>
    </div>
    <div
      v-if="!store.comicsLoading && !store.comicsError && !store.comics.length"
    >
      <p class="text-left text-xl font-extrabold text-gray-900">
        Hero didn't appear in any of our comic sheets.
      </p>
    </div>
  </div>
</template>

<script>
import ComicPreview from './ComicPreview.vue';
import Loader from './Loader.vue';

import store from '@/store';

export default {
  name: 'hero-comics',
  components: {
    Loader,
    ComicPreview
  },
  computed: {
    store: function() {
      return this.$store.state.hero;
    },
    getComics: function() {
      return this.$store.getters.getComics;
    }
  },
  store
};
</script>

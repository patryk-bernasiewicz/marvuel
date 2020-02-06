<template>
  <div class="heroes container mx-auto">
    <ul class="heroes-list flex flex-wrap">
      <li
        class="flex flex-wrap w-1/3 p-2"
        v-for="hero of heroes"
        :key="hero.id"
      >
        <div
          class="hero flex flex-grow h-32 rounded shadow-md p-2 relative overflow-hidden"
        >
          {{ hero.name }}
          <img
            :src="getHeroThumbnail(hero)"
            :alt="hero.name"
            class="hero-image absolute inset-0 h-full w-full"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { heroes } from '../mock-data';

export default {
  data: () => ({ heroes }),
  methods: {
    getHeroThumbnail: ({ thumbnail: { path, extension } }) =>
      `${path}.${extension}`
  }
};
</script>

<style scoped>
.hero-image {
  object-fit: cover;

  transform: scale(1.1);
}
.hero:hover .hero-image {
  transform: scale(1);
}

@media all and (-ms-high-contrast: none) {
  .hero-image {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.1);

    min-width: 100%;
    max-width: 10000%;
    height: auto;
  }
  .hero:hover .hero-image {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>

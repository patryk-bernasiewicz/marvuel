<template>
  <div
    class="hero cursor-pointer flex flex-grow h-48 rounded shadow-md hover:shadow-lg relative overflow-hidden"
  >
    <div
      class="hero-description flex justify-center items-center p-2 w-full h-full z-10 text-white"
    >
      <h3 class="hero-name text-lg font-extrabold">{{ hero.name }}</h3>
    </div>
    <img
      :src="getHeroThumbnail(hero)"
      :alt="hero.name"
      class="hero-image absolute inset-0 h-full w-full z-0"
    />
  </div>
</template>

<script>
export default {
  name: 'heroes-list-item',
  props: {
    hero: {
      type: Object,
      required: true
    }
  },
  methods: {
    getHeroThumbnail: ({ thumbnail: { path, extension } }) =>
      `${path}.${extension}`
  }
};
</script>

<style scoped>
.hero {
  @apply transition-shadow duration-300 ease-out;
}

.hero-image {
  @apply transition-transform duration-300 ease-out;

  object-fit: cover;
  transform: scale(1.1);
}
.hero:hover .hero-image {
  transform: scale(1);
}

.hero-description {
  @apply transition-opacity duration-300 ease-out;

  background: rgba(0, 0, 0, 0.5);
}

@media screen and (min-width: 768px) {
  .hero-description {
    opacity: 0;
  }
  .hero:hover .hero-description {
    opacity: 1;
  }
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

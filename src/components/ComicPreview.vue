<template>
  <a
    :href="url"
    target="_blank"
    class="comic block relative cursor-pointer w-full relative overflow-hidden bg-green-900"
  >
    <img
      :src="comic.thumbnail"
      :alt="comic.title"
      class="comic-image absolute inset-0 z-0"
    />
    <div
      class="comic-desc py-4 absolute inset-0 z-10 flex flex-col justify-center items-center text-white"
    >
      <div class="comic-scroll px-4 text-center">
        <h5 class="comic-title font-extrabold mb-2">{{ comic.title }}</h5>
        <div class="comic-creators text-xs">
          <strong>Creators:</strong>
          <ul>
            <li
              class="comic-creator"
              v-for="creator of this.comic.creators.items"
              :key="creator.name"
            >
              {{ creator.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'comic-preview',
  data: () => ({
    url: null,
    creators: []
  }),
  props: {
    comic: {
      type: Object,
      required: true
    }
  },
  mounted() {
    if (this.comic.urls) {
      this.url =
        this.comic.urls.filter(url => url.type === 'detail')[0].url || null;
    }

    if (this.comic.creators) {
      this.creators = this.comic.creators.items;
    }
  }
};
</script>

<style scoped>
.comic::before {
  content: '';
  display: block;
  padding-top: 150%;
}

.comic-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media all and (-ms-high-contrast: none) {
  .comic-image {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.1);

    min-height: 100%;
    max-height: 10000%;
    width: auto;
  }
}

.comic-desc {
  @apply transition-opacity ease-out duration-150;
  background-color: rgba(0, 0, 0, 0.5);
}

.comic-scroll {
  max-height: 250px;
  width: calc(100% + 18px);
  overflow-y: scroll;
  overflow-x: hidden;
  margin-right: -18px;
  padding-right: 18px;
}

.comic-title {
  transition-delay: 0.05s;
}

.comic-creators {
  transition-delay: 0.3s;
}

@media screen and (min-width: 640px) {
  .comic-desc {
    opacity: 0;
  }
  .comic:hover .comic-desc {
    opacity: 1;
  }

  .comic-title,
  .comic-creators {
    @apply transition-all ease-out duration-150;
    transform: translateY(-50%);
    opacity: 0;
  }
  .comic:hover .comic-title,
  .comic:hover .comic-creators {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>

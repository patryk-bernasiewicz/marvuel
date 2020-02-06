<template>
  <div class="heroes container mx-auto px-2">
    <ul v-if="heroes.length" class="heroes-list flex flex-wrap">
      <li
        class="flex flex-wrap w-full sm:w-1/2 md:w-1/3 p-2"
        v-for="hero of heroes"
        :key="hero.id"
      >
        <heroes-list-item :hero="hero" />
      </li>
    </ul>
    <div v-else class="heroes-message">
      <p class="text-lg font-extrabold">No heroes to display!</p>
    </div>
  </div>
</template>

<script>
import HeroesListItem from './HeroesListItem.vue';

export default {
  components: {
    HeroesListItem
  },
  props: {
    heroes: {
      type: Array,
      required: true
    }
  }
};
</script>

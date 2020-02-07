<template>
  <div class="nav-wrapper bg-gray-900">
    <nav class="container px-2 mx-auto flex flex-row justify-between">
      <router-link to="/">
        <img
          src="../assets/img/marvuel-logo.png"
          alt="MarVuel Logo"
          class="h-12"
        />
      </router-link>

      <ul class="nav-links flex h-12 items-center">
        <li v-for="route of routes" v-bind:key="route.name">
          <router-link v-bind:to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { routes } from '../router';

export default {
  data: () => ({ routes: routes.filter(route => route.inNav) })
};
</script>

<style scoped>
.nav-links a {
  @apply relative;
  @apply transition-colors duration-300 ease-out;
  @apply text-white;
}
.nav-links a::after {
  @apply absolute left-0 right-0;
  @apply border-solid border-b-2 border-green-600;
  @apply transition-all duration-300 ease-out;
  @apply opacity-0;
  content: '';
  transform: scaleX(0);
  bottom: -5px;
}
.nav-links a:hover,
.nav-links a.router-link-exact-active {
  @apply text-green-600;
}
.nav-links a:hover::after,
.nav-links a.router-link-exact-active::after {
  @apply opacity-100;
  transform: scaleX(1);
}
</style>

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

      <ul class="flex h-12 items-center">
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

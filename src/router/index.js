import Vue from 'vue';
import VueRouter from 'vue-router';
import Heroes from '@/views/Heroes.vue';

const HeroDetails = () => import('@/views/HeroDetails.vue');

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'Heroes',
    component: Heroes,
    inNav: true
  },
  {
    path: '/:id',
    name: 'Hero Details',
    component: HeroDetails
  }
];

const router = new VueRouter({
  routes
});

export default router;

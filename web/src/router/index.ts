import UrlInfo from '@/pages/url-info/url-info.vue';
import UrlShortener from '@/pages/url-shortener/url-shortener.vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: UrlShortener
  },
  {
    path: '/admin/links',
    component: UrlInfo
  }
];

export const router = new VueRouter({
  mode: 'history',
  routes
});

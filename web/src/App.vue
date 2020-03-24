<template>
  <div id="app">
    <div class="url-shortener--container">
      <router-view />
    </div>
    <div class="signature">
      Created by
      <a href="https://axelfroborg.nu" target="_blank">Axel Froborg</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    urlShortener: () => import('@/pages/url-shortener/url-shortener.vue')
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  background: url('./assets/bg-vector.svg');
  background-size: cover;
  position: relative;
  background-position: right;
  background-attachment: fixed;
}

.signature {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 12px;
  a {
    font-weight: bold;
    color: black;
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>

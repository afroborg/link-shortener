<template>
  <div id="app">
    <div class="url-shortener--container">
      <url-shortener></url-shortener>
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
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: url('./assets/bg-vector.svg');
  background-size: cover;
  position: relative;
}
</style>

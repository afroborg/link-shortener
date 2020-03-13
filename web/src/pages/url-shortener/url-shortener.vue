<template>
  <div class="url-shortener">
    <div class="text--container">
      <h1>Have a <br />l<span>ooooooooon</span>g url?</h1>
      <h2>Shrink it here!</h2>
    </div>
    <div class="input-fields--container">
      <input-field
        label="Paste your url here"
        icon="link"
        v-model="originalUrl"
        name="originalUrl"
      />
      <cooler-button text="Shrink" @click="shrinkUrl" />
    </div>
    <div class="input-fields--container">
      <input-field
        :value="fullShortLink"
        name="shortLink"
        icon="rocket"
        :disabled="shortLink === ''"
        label="Your link will display here"
      />
      <cooler-button text="Copy" />
      <cooler-button text="Customize" />
    </div>
  </div>
</template>

<script src="./url-shortener.ts" lang="ts"></script>

<style lang="scss" src="./url-shortener.scss" scoped></style>

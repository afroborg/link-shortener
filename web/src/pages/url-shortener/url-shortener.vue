<template>
  <div class="url-shortener">
    <div class="text--container">
      <h1>Have a <br />l<span></span>ng url?</h1>
      <h2>We'll help you make it shorter.</h2>
    </div>
    <form class="input-fields--container" @submit="shrinkUrl">
      <input-field
        label="Paste your url here"
        icon="link"
        v-model="originalUrl"
        name="originalUrl"
      />
      <cooler-button
        text="Shrink"
        :loading="makingRequest"
        :disabled="originalUrl === ''"
      />
    </form>
    <div class="input-fields--container">
      <input-field
        :value="fullShortLink"
        name="shortLink"
        icon="rocket"
        :disabled="true"
        :label="
          shortLink === ''
            ? placeholder
            : 'Here\'s your new (and improved) link'
        "
      />
      <cooler-button
        text="Copy"
        class="copy-button"
        :disabled="fullShortLink === ''"
      />
      <cooler-button text="Customize" :disabled="fullShortLink === ''" />
    </div>
  </div>
</template>

<script src="./url-shortener.ts" lang="ts"></script>

<style lang="scss" src="./url-shortener.scss" scoped></style>

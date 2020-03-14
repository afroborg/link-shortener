<template>
  <div class="url-shortener">
    <div class="text--container">
      <h1>
        Have a
        <br />l<span></span>ng url?
      </h1>
      <h2>Let's shorten it.</h2>
    </div>
    <form class="input-fields--container" @submit="shrinkUrl">
      <input-field
        label="Paste your url here"
        icon="link"
        v-model="originalUrl"
        name="originalUrl"
      />
      <cooler-button
        :loading="makingRequest"
        :disabled="originalUrl === ''"
        icon="fal fa-compress-alt"
        tooltip="Shrink!"
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
        @click="copyLink"
      />
      <cooler-button
        class="copy-button"
        :disabled="fullShortLink === ''"
        :icon="copied ? 'far fa-check' : 'fal fa-copy'"
        tooltip="Copy!"
        @click="copyLink"
      />
      <cooler-button
        icon="fal fa-palette"
        :disabled="fullShortLink === ''"
        tooltip="Customize!"
      />
    </div>
  </div>
</template>

<script src="./url-shortener.ts" lang="ts"></script>

<style lang="scss" src="./url-shortener.scss" scoped></style>

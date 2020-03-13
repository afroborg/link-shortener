<template>
  <div :class="'cooler-button ' + classes" :style="'' + style">
    <button @click="() => $emit('click')" :disabled="disabled">
      <span v-if="!loading">{{ text }}</span>
      <span v-else><i class="fas fa-spinner-third" /> Loading...</span>
    </button>
  </div>
</template>

<script lang="ts" src="./cooler-button.ts"></script>

<style lang="scss" src="./cooler-button.scss"></style>

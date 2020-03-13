<template>
  <div :class="'cooler-button ' + classes" :style="'' + style">
    <button @click="() => $emit('click')">{{ text }}</button>
  </div>
</template>

<script lang="ts" src="./cooler-button.ts"></script>

<style lang="scss" src="./cooler-button.scss"></style>

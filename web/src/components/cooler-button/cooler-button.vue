<template>
  <div :class="'cooler-button ' + classes" :style="'' + style">
    <div class="tooltip" :class="{ disabled }" v-if="tooltip">
      {{ tooltip }}
    </div>
    <button @click="() => $emit('click')" :disabled="disabled">
      <span v-if="!loading">
        <i v-if="icon" :class="icon" />
        {{ text }}
      </span>
      <span v-else
        ><i class="fas fa-spinner-third spinner" />
        <span v-if="text" class="loading--text"> Loading...</span>
      </span>
    </button>
  </div>
</template>

<script lang="ts" src="./cooler-button.ts"></script>

<style lang="scss" src="./cooler-button.scss"></style>

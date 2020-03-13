<template>
  <div :class="'input-field ' + classes">
    <label
      :for="'input-field--' + name"
      v-if="label"
      :class="{ active: isActive, disabled }"
    >
      <i :class="'far fa-' + icon" v-if="icon" />
      <span>{{ label }}</span>
    </label>
    <input
      type="text"
      :name="name"
      :id="'input-field--' + name"
      @focus="() => (active = true)"
      @blur="() => (active = false)"
      @input="updateValue"
      :disabled="disabled"
      :value="value"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts" src="./input-field.ts"></script>

<style lang="scss" src="./input-field.scss"></style>

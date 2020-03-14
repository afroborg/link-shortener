<template>
  <div :class="'input-field ' + classes">
    <label
      :for="'input-field--' + name"
      v-if="label"
      :class="{ active: isActive, disabled }"
    >
      <i :class="'fal fa-' + icon" v-if="icon" />
      <span>{{ label }}</span>
    </label>
    <input
      @focus="() => (!disabled ? (active = true) : null)"
      @blur="() => (active = false)"
      @input="updateValue"
      :name="name"
      :id="'input-field--' + name"
      :value="value"
      :placeholder="placeholder"
      :class="{ disabled }"
      :readonly="disabled"
      type="text"
      ref="input"
    />
    <div
      class="disabled--clicker"
      v-if="disabled"
      @click="() => $emit('click')"
    ></div>
  </div>
</template>

<script lang="ts" src="./input-field.ts"></script>

<style lang="scss" src="./input-field.scss"></style>

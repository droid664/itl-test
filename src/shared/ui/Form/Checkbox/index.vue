<template>
  <label class="checkbox">
    <input v-model="value" class="checkbox__input" type="checkbox" />
    <span class="checkbox__custom"></span>
  </label>
</template>

<script setup lang="ts">
const value = defineModel('checked', {
  default: false,
})
</script>

<style lang="scss" scoped>
.checkbox {
  &__input {
    display: none;
    &:checked + .checkbox__custom {
      background: var(--green);
    }
  }
  &__custom {
    display: block;
    width: 34px;
    aspect-ratio: 1;
    border: 2px solid var(--gray);
    border-radius: 6px;
  }
}
</style>

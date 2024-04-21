<template>
  <button
    @click="handleClick"
    :type="type"
    class="button"
    :class="[color ? `button--${color}` : '']"
  >
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
const { text, type, handleClick, color } = defineProps<{
  text: string
  type: 'button' | 'submit'
  color?: 'gray' | 'green'
  handleClick?: () => void
}>()
</script>

<style lang="scss" scoped>
.button {
  height: 52px;
  padding-inline: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16);
  min-width: 273px;
  border: none;
  transition: opacity 0.3s ease;
  cursor: pointer;
  font-size: 24px;
  font-family: var(--additional-font-family);
  color: var(--white);
  &--gray {
    background-color: var(--gray);
  }
  &--green {
    background-color: var(--green-100);
  }
  &:hover {
    opacity: 0.8;
  }
}
</style>

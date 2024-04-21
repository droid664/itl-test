<template>
  <div class="modal" :class="[isShow ? 'modal--active' : '']">
    <div @click.self="$emit('close')" class="modal__body">
      <div class="modal__content">
        <slot></slot>
        <button @click="$emit('close')" type="button" class="modal__close"></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { isShow } = defineProps<{
  isShow: boolean
}>()

defineEmits(['close'])
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  inset: 0;
  z-index: var(--z-index-modal);
  overflow: auto;
  background: rgba(0, 0, 0, 0.3);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  &__body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    padding: 20px;
  }
  &__content {
    position: relative;
    max-width: 1460px;
    border-radius: 30px;
    background: var(--white);
    padding-top: 65px;
    padding-left: 417px;
    padding-right: 270px;
    padding-bottom: 53px;
    transform: scale(0.8);
    transition: transform 0.3s ease;
  }
  &__close {
    border-radius: 50%;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 46px;
    aspect-ratio: 1;
    background: var(--gray-50);
    border: none;
    transform: rotate(-45deg);
    cursor: pointer;
    transition: opacity 0.3s ease;
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 24px;
      border-top: 4px solid var(--white);
      border-radius: 2px;
      transform: translate(-50%, -50%);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-90deg);
    }
    &:hover {
      opacity: 0.7;
    }
  }
  &--active {
    pointer-events: initial;
    opacity: 1;
    transform: scale(1);
    .modal__content {
      transform: scale(1);
    }
  }
}
</style>

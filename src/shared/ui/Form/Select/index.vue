<template>
  <div
    v-click-outside-element="() => (show = false)"
    class="select"
    :class="[show ? 'select--show' : '']"
  >
    <div @click="show = true" class="select__value">{{ selected ? selected : 'Выбрать' }}</div>
    <div class="select__options">
      <button
        @click="handleSelect(option)"
        v-for="option of options"
        :key="option"
        class="select__option"
        :class="[option === selected ? 'select__option--current' : '']"
        type="button"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(false)

const selected = defineModel('selected', {
  default: '',
})

const { options } = defineProps<{
  options: Array<string>
}>()

const handleSelect = (val: string) => {
  selected.value = val
  show.value = false
}
</script>

<style lang="scss">
@import '../../../styles/components/input.scss';

.select {
  position: relative;
  &__value {
    color: var(--black);
    padding-right: 55px;
    position: relative;
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 23px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid var(--gray);
      transition: transform 0.3s ease;
    }
  }
  &__value,
  &__option {
    display: flex;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  &__options {
    background: var(--white);
    position: absolute;
    top: calc(100% + 20px);
    width: 100%;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
    transition: all 0.3s ease;
    transition-property: opacity, transform;
    transform: translateY(-20%);
    opacity: 0;
    pointer-events: none;
  }
  &__option,
  &__value {
    @extend .input;
    display: flex;
    align-items: center;
    font-size: 30px;
  }
  &__option {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
    cursor: pointer;
    &:hover {
      background: rgba($color: black, $alpha: 0.1);
    }
  }
  &--show {
    .select__options {
      opacity: 1;
      transform: none;
      pointer-events: initial;
    }
    .select__option {
      &--current {
        background: rgba($color: black, $alpha: 0.2);
      }
    }
    .select__value {
      &::before {
        transform: rotate(180deg);
      }
    }
  }
}
</style>

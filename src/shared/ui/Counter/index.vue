<template>
  <div class="counter">
    <h3 v-if="title" class="counter__title">{{ title }}</h3>
    <div class="counter__values">
      <span>{{ leftValue }}</span>
      /
      <span>{{ rightValue }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { title, leftValue, rightValue } = defineProps<{
  title?: string
  leftValue: number
  rightValue: number
}>()
</script>

<style lang="scss" scoped>
.counter {
  font-weight: 700;
  font-size: 30px;
  &__title {
    margin-bottom: 10px;
  }
  &__values {
    span {
      &:first-child {
        margin-right: 12px;
        color: var(--green);
      }
      &:last-child {
        margin-left: 8px;
        color: var(--red);
      }
    }
  }
}
</style>

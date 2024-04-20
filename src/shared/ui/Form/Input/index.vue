<template>
  <input class="input" v-model="value" :type="type" :placeholder="placeholder" :name="name" />
</template>

<script setup lang="ts">
export interface Props {
  placeholder?: string
  name?: string
  type?: string
}

const { placeholder, name, type } = withDefaults(defineProps<Props>(), {
  type: 'text',
})

const value = defineModel('value', {
  default: '',
})
</script>

<style lang="scss">
@import '../../../styles/components/input.scss';
</style>

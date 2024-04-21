<template><Button @click="handleClick" type="button" text="Добавить" color="green" /></template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { Button } from '../../../shared'

const router = useRouter()

const handleClick = () => {
  router.push({
    query: {
      modal: 'member',
    },
  })
}
</script>

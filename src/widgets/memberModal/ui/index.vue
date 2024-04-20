<template>
  <Teleport to="body">
    <Modal :isShow="isShow"></Modal>
  </Teleport>
</template>

<script lang="ts" setup>
import { MemberModal } from '../model'
import { Modal } from '../../../shared'

const { isShow } = MemberModal()
</script>

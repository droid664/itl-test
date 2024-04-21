<template>
  <Counter
    title="Посетители"
    :leftValue="memberStore.getPresent.length"
    :rightValue="memberStore.getAbsent.length"
  />
</template>

<script lang="ts" setup>
import { MemberModel } from '../../../entites/member'
import { Counter } from '../../../shared'

const memberStore = MemberModel()
</script>

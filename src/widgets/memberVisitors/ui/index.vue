<template>
  <Counter title="Посетители" :leftValue="getPresent.length" :rightValue="getAbsent.length" />
</template>

<script lang="ts" setup>
import { MemberModel } from '../../../entites/member'
import { Counter } from '../../../shared'

const { getPresent, getAbsent } = MemberModel()
</script>

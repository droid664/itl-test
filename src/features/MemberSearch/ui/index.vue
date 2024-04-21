<template>
  <Input type="search" v-model="searchVal" placeholder="Поиск по имени" />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { Input } from '../../../shared'
import { MemberModel } from '../../../entites/member'

const searchVal = ref('')
const memberStore = MemberModel()

watch(searchVal, () => {
  memberStore.setSearch(searchVal.value)
})
</script>

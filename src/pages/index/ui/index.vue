<template>
  <div class="index-page">
    <MemberFilter />
    <SearchMember />
    <MemberListWidget />
  </div>
</template>

<script setup lang="ts">
import { SearchMember } from '../../../features/MemberSearch'
import { MemberListWidget } from '../../../widgets'
import { MemberFilter } from '../../../features/MemberFilter'
</script>

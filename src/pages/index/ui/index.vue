<template>
  <div class="index-page">
    <SearchMember />
    <MemberListWidget />
  </div>
</template>

<script setup lang="ts">
import { SearchMember } from '../../../features/MemberSearch'
import { MemberListWidget } from '../../../widgets'
</script>

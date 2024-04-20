<template>
  <div class="index-page">
    <MemberVisitors />
    <MemberFilter />
    <SearchMember />
    <MemberListWidget />
    <MemberModal />
    <MemberModalButton />
  </div>
</template>

<script setup lang="ts">
import { SearchMember } from '../../../features/MemberSearch'
import { MemberListWidget, MemberVisitors } from '../../../widgets'
import { MemberFilter } from '../../../features/MemberFilter'
import { MemberModal } from '../../../widgets'
import { MemberModalButton } from '../../../features/MemberAddButton'
</script>

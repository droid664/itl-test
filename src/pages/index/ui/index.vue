<template>
  <div class="index-page">
    <MemberVisitors />
    <MemberFilter />
    <SearchMember />
    <MemberListWidget />
    <Modal></Modal>
  </div>
</template>

<script setup lang="ts">
import { SearchMember } from '../../../features/MemberSearch'
import { MemberListWidget, MemberVisitors } from '../../../widgets'
import { MemberFilter } from '../../../features/MemberFilter'
import { Modal } from '../../../shared'
</script>

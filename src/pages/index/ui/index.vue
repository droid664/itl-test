<template>
  <div class="index-page">
    <MemberHeader>
      <template #count>
        <MemberVisitors />
      </template>
    </MemberHeader>
    <MemberListWidget />
    <MemberFilter />
    <MemberModal />
  </div>
</template>

<script setup lang="ts">
import { MemberListWidget, MemberVisitors } from '../../../widgets'
import { MemberFilter } from '../../../features/MemberFilter'
import { MemberModal } from '../../../widgets'
import { MemberHeader } from '../../../widgets/memberHeader'
</script>

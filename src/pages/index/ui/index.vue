<template>
  <div class="index-page">
    <div class="index-page__top">
      <MemberHeader>
        <template #count>
          <MemberVisitors />
        </template>
      </MemberHeader>
    </div>
    <MemberListWidget />
    <MemberModal />
    <div class="index-page__bottom">
      <MemberFilter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { MemberListWidget, MemberVisitors } from '../../../widgets'
import { MemberFilter } from '../../../features/MemberFilter'
import { MemberModal } from '../../../widgets'
import { MemberHeader } from '../../../widgets/memberHeader'
</script>

<style lang="scss" scoped>
.index-page {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  padding-top: 24px;
  &__top {
    margin-bottom: 34px;
  }
  &__bottom {
    position: sticky;
    bottom: 0;
    background: var(--white);
    padding-top: 46px;
    padding-bottom: 46px;
  }
}
</style>

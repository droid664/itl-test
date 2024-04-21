<template>
  <header class="member-header">
    <div class="container">
      <div class="member-header__grid">
        <div class="member-header__logo">
          <Logo />
        </div>
        <div class="member-header__search">
          <SearchMember />
        </div>
        <div class="member-header__add">
          <MemberModalButton />
        </div>
        <div class="member-header__count">
          <slot name="count"></slot>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { Logo } from '../../../shared'
import { SearchMember } from '../../../features/MemberSearch'
import { MemberModalButton } from '../../../features/MemberAddButton'
</script>

<style lang="scss" scoped>
.member-header {
  &__grid {
    display: flex;
    align-items: flex-end;
    gap: 32px;
  }
  &__count {
    margin-left: auto;
  }
  &__search {
    margin-right: 8px;
    width: 394px;
    max-width: 100%;
    .input {
      width: 100%;
    }
  }
}
</style>

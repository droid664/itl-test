<template>
  <div class="member-list">
    <template v-if="members">
      <header class="member-list__header">
        <span v-for="col of columns" :key="col">{{ col }}</span>
      </header>
      <div class="member-list__wrapper">
        <a href="#" v-for="(member, index) of members" :key="member.id" class="member-list__item">
          <div class="member-list__index">{{ index + 1 }}</div>
          <h3 class="member-list__fullname">{{ member.fullName }}</h3>
          <span class="member-list__company">{{ member.company }}</span>
          <span class="member-list__group">{{ member.group }}</span>
          <span
            class="member-list__status"
            :class="[member.presence ? 'member-list__status--present' : '']"
          ></span>
        </a>
      </div>
    </template>
    <template v-else>
      <h2>Список пуст :(</h2>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { MemberModel } from '../../../entites/member'
import { storeToRefs } from 'pinia'

const columns = ref(['Номер', 'ФИО', 'Компания', 'Группа', 'Присутствие'])

const memberStore = MemberModel()
const { members } = storeToRefs(memberStore)
</script>

<style lang="scss">
.member-list {
  &__header,
  &__item {
    display: grid;
    grid-template-columns: 11% 26% 21% 1fr 120px;
  }
  &__header {
    border-bottom: 4px solid var(--gray-100);
    margin-bottom: 30px;
    span {
      display: inline-flex;
      align-items: center;
      min-height: 35px;
      font-size: 20px;
      font-weight: 600;
    }
  }
  &__item {
    text-decoration: none;
    min-height: 60px;
    align-items: center;
    &:hover {
      background-color: var(--gray-100);
    }
    * {
      display: block;
      color: var(--black);
      font-size: 30px;
      font-weight: 400;
    }
  }
  &__fullname {
    margin-bottom: 0;
  }
  &__fullname,
  &__company,
  &__group {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-right: 50px;
  }
  &__index {
    padding-right: 10px;
  }
  &__status {
    display: flex;
    justify-content: center;
    &::before {
      content: '';
      aspect-ratio: 1;
      width: 60px;
      border-radius: 50%;
      background: var(--red);
    }
    &--present {
      &::before {
        background: var(--green);
      }
    }
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>

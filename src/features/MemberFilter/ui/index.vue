<template>
  <div class="member-filters">
    <h3>Фильтровать по:</h3>
    <ul class="member-filters__list">
      <li class="member-filters__item">
        <label v-for="filter of filters" :key="filter.value">
          {{ filter.name }}
          <input v-model="current" type="radio" name="filter-radio-button" :value="filter.value" />
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Filter, MemberModel } from '../../../entites/member'

const memberStore = MemberModel()

type MemberFilter = {
  name: string
  value: Filter
}

const current = ref<Filter>('none')

const filters = ref<MemberFilter[]>([
  {
    name: 'Отсутсвующим',
    value: 'absent',
  },
  {
    name: 'Присутствующим',
    value: 'present',
  },
  {
    name: 'Без фильтра',
    value: 'none',
  },
])

watch(current, () => {
  memberStore.setFilter(current.value)
})
</script>

<style lang="scss">
.member-filters {
  display: flex;
  align-items: center;
  h3 {
    margin-bottom: 0;
    font-size: 30px;
    font-weight: 700;
    margin-right: 50px;
  }
  &__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  label {
    display: inline-flex;
    align-items: center;
    height: 54px;
    padding-inline: 20px;
    cursor: pointer;
    font-size: 25px;
    font-weight: 400;
    border-radius: 20px;
    input {
      display: none;
    }
    &:has(input:checked) {
      background-color: var(--gray-200);
      color: var(--white);
    }
  }
}
</style>

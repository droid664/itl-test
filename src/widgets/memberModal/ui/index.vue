<template>
  <Teleport to="body">
    <Modal :isShow="modalStore.isShow">
      <form class="form">
        <div
          v-for="field of Object.values(fields)"
          :key="field.name"
          class="form__item"
          :class="field.className"
        >
          <p class="form__item-name">{{ field.name }}</p>
          <template v-if="field.type === 'text'">
            <Input v-model="field.value" />
          </template>
          <template v-if="field.type === 'select' && field.options">
            <Select :options="field.options" />
          </template>
          <template v-if="field.type === 'checkbox'">
            <Checkbox v-model="field.value" />
          </template>
        </div>
        <div class="form__bottom">
          <Button type="submit" text="Добавить" color="green" />
          <Button type="button" text="Отмена" color="gray" />
        </div>
      </form>
    </Modal>
  </Teleport>
</template>

<script lang="ts" setup>
import { MemberModal } from '../model'
import { Modal } from '../../../shared'
import { ref } from 'vue'
import { Input } from '../../../shared'
import { Select } from '../../../shared'
import { Checkbox } from '../../../shared'
import { Button } from '../../../shared'

const modalStore = MemberModal()

modalStore.$patch({
  isShow: true,
})

const fields = ref([
  {
    name: 'ФИО',
    type: 'text',
    required: true,
    value: '',
    className: 'form__item-name--fio',
  },
  {
    name: 'Компания',
    type: 'text',
    required: true,
    value: '',
    className: 'form__item-name--company',
  },
  {
    name: 'Группа',
    type: 'select',
    options: ['Прохожий', 'Клиент', 'Партнер'],
    required: true,
    value: '',
    className: 'form__item-name--group',
  },
  {
    name: 'Присутсвие',
    type: 'checkbox',
    required: true,
    value: false,
    className: 'form__item-name--presence',
  },
])

console.log(fields)
</script>

<style lang="scss">
.form {
  &__item {
    display: flex;
    align-items: center;
    &-name {
      margin-bottom: 0;
      min-width: 275px;
      padding-right: 20px;
      font-size: 32px;
      font-weight: 600;
      &--fio {
        margin-bottom: 40px;
      }
      &--company {
        margin-bottom: 57px;
      }
      &--group {
        margin-bottom: 75px;
      }
      &--presence {
        margin-bottom: 48px;
      }
    }
    .input {
      font-size: 30px;
      color: var(--black);
    }
    .input,
    .select__value {
      width: 502px;
    }
  }
  &__bottom {
    display: flex;
    gap: 34px;
  }
}
</style>

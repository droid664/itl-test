<template>
  <Teleport to="body">
    <Modal :isShow="Boolean(IS_MODAL_ACTIVE)" @close="closeModal">
      <form @submit.prevent="handleSubmit" class="form">
        <div class="form__item form__item--fio">
          <div class="form__item-name">ФИО</div>
          <Input v-model="fullName" />
        </div>
        <div class="form__item form__item--company">
          <div class="form__item-name">Компания</div>
          <Input v-model="company" />
        </div>
        <div class="form__item form__item--company">
          <div class="form__item-name">Группа</div>
          <Select v-model:selected="selected" :options="GROUP" />
        </div>
        <div class="form__item form__item--company">
          <div class="form__item-name">Присутсвие</div>
          <Checkbox v-model:checked="present" />
        </div>
        <div class="form__bottom">
          <Button type="submit" text="Добавить" color="green" />
          <Button @click="closeModal" type="button" text="Отмена" color="gray" />
        </div>
      </form>
    </Modal>
  </Teleport>
</template>

<script lang="ts" setup>
import { Modal } from '../../../shared'
import { Input } from '../../../shared'
import { Select } from '../../../shared'
import { Checkbox } from '../../../shared'
import { Button } from '../../../shared'
import { computed, ref } from 'vue'
import { MemberModel } from '../../../entites/member'
import { MemberGroup } from '../../../entites/member/types/group.enum'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const GROUP = ['Прохожий', 'Клиент', 'Партнер']
const memberStore = MemberModel()
const fullName = ref('')
const company = ref('')
const selected = ref<MemberGroup | ''>('')
const present = ref(false)

const closeModal = () => {
  const newQuery = { ...route.query }
  delete newQuery.modal
  router.replace({ query: newQuery })
}

const handleSubmit = () => {
  if (!fullName.value || !selected.value || !company.value) {
    alert('Все поля обязательны к заполнению!')
    return
  }

  memberStore.addMember({
    fullName: fullName.value,
    company: company.value,
    group: selected.value,
    presence: present.value,
  })

  closeModal()

  fullName.value = ''
  company.value = ''
  selected.value = ''
  present.value = false
}
const IS_MODAL_ACTIVE = computed(() => {
  return route.query.modal && route.query.modal === 'member'
})
</script>

<style lang="scss">
.form {
  &__item {
    display: flex;
    align-items: center;
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
    &-name {
      margin-bottom: 0;
      min-width: 275px;
      padding-right: 20px;
      font-size: 32px;
      font-weight: 600;
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

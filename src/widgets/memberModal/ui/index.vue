<template>
  <Teleport to="body">
    <Modal :isShow="Boolean(IS_MODAL_ACTIVE)" @close="closeModal">
      <form @submit.prevent="handleSubmit" class="form">
        <div class="form__item form__item--fio">
          <div class="form__item-name">ФИО</div>
          <Input v-model:value="fullName" />
        </div>
        <div class="form__item form__item--company">
          <div class="form__item-name">Компания</div>
          <Input v-model:value="company" />
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
          <Button type="submit" :text="memberId ? 'Сохранить' : 'Добавить'" color="green" />
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
import { computed, ref, watch } from 'vue'
import { MemberModel } from '../../../entites/member'
import { MemberGroup } from '../../../entites/member/types/group.enum'
import { useRoute, useRouter } from 'vue-router'

const memberId = ref<string | null>(null)
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
  delete newQuery.memberId

  resetFields()

  router.replace({ query: newQuery })
}

const handleSubmit = () => {
  if (!fullName.value || !selected.value || !company.value) {
    alert('Все поля обязательны к заполнению!')
    return
  }

  if (!memberId.value) {
    memberStore.addMember({
      fullName: fullName.value,
      company: company.value,
      group: selected.value,
      presence: present.value,
    })
  } else {
    memberStore.changeMember(memberId.value, {
      fullName: fullName.value,
      company: company.value,
      group: selected.value,
      presence: present.value,
    })
  }

  closeModal()
}

const resetFields = () => {
  memberId.value = null
  fullName.value = ''
  company.value = ''
  selected.value = ''
  present.value = false
}

const fillFields = () => {
  const query = route.query

  if (!query.memberId) return

  memberId.value = String(query.memberId)

  const member = memberStore.findOne(memberId.value)

  if (!member) {
    console.error('ModalMember: пользователь не найден!')
    return
  }

  fullName.value = member.fullName
  company.value = member.company
  selected.value = member.group
  present.value = member.presence
}

const IS_MODAL_ACTIVE = computed(() => {
  return route.query.modal && route.query.modal === 'member'
})

watch(IS_MODAL_ACTIVE, (state) => {
  if (state) {
    fillFields()
  } else {
    resetFields()
  }
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

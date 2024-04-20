import { defineStore } from 'pinia'
import { IMember } from '../types/member.interface'
import { computed, ref } from 'vue'
import { nanoid } from 'nanoid'
import { Filter } from '../types/filter.type'

type MemberData = Omit<IMember, 'id'>

export const useMemberStore = defineStore(
  'MemberStore',
  () => {
    const members = ref<IMember[]>([])
    const searchName = ref('')
    const filter = ref<Filter>('none')

    const addMember = (member: MemberData): void => {
      members.value.push({
        id: nanoid(),
        ...member,
      })
    }

    const changeMember = (id: string, newData: Partial<MemberData>): void => {
      members.value = members.value.map((m) => {
        if (m.id === id) {
          return Object.assign(m, newData)
        }
        return m
      })
    }

    const setSearch = (val: string) => {
      searchName.value = val
    }

    const setFilter = (val: Filter) => {
      filter.value = val
    }

    const getMemberFilter = computed(() => {
      return members.value.filter((m) => {
        if (searchName.value && !m.fullName.includes(searchName.value)) {
          return false
        }

        if (filter.value === 'none') {
          return true
        }

        if (filter.value === 'present' && m.presence) {
          return true
        }

        if (filter.value === 'absent' && !m.presence) {
          return true
        }

        return false
      })
    })

    return {
      members,
      searchName,
      filter,
      setSearch,
      setFilter,
      addMember,
      changeMember,
      getMemberFilter,
    }
  },
  {
    persist: {
      storage: localStorage,
      paths: ['members'],
    },
  },
)

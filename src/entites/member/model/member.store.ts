import { defineStore } from 'pinia'
import { IMember } from '../types/member.interface'
import { computed, ref } from 'vue'
import { nanoid } from 'nanoid'

type MemberData = Omit<IMember, 'id'>

export const useMemberStore = defineStore(
  'MemberStore',
  () => {
    const members = ref<IMember[]>([])

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

    const getMembers = computed(() => {
      return members.value
    })

    return {
      members,
      addMember,
      changeMember,
      getMembers,
    }
  },
  {
    persist: true,
  },
)

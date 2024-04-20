import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMemberModalStore = defineStore('MemberModalStore', () => {
  const isShow = ref(false)

  const setIsShow = (value: boolean) => {
    isShow.value = value
  }

  return {
    isShow,
    setIsShow,
  }
})

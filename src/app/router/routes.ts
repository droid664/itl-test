import { RouteRecordRaw } from 'vue-router'
import { IndexPage } from '../../pages'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: IndexPage,
  },
]

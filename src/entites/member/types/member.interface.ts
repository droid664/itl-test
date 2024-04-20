import { MemberGroup } from './group.enum'

export interface IMember {
  id: string
  fullName: string
  company: string
  group: MemberGroup
  presence: boolean
}

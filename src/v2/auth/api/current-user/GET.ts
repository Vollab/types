import { Role } from '../../../../shared/role'

export interface Response {
  user: {
    id: string
    role: Role
    name: string
    phone: string
    avatar?: string
    biography: string
    activity_area: { id: string; name: string }
    links?: { id: string; url: string; text: string }[]
  }
}

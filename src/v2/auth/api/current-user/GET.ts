import { Role } from '../../../../shared/role'
import { ActivityArea } from '../../../shared/activity_area'
import { Link } from '../../../shared/link'

export interface Response {
  user: {
    id: string
    role: Role
    name: string
    email: string
    phone: string
    links?: Link[]
    avatar?: string
    biography: string
    activity_area: ActivityArea[]
  }
}

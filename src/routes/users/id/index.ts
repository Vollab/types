import { Link } from 'src/types/api/shared/link'
import { Role } from 'src/types/api/shared/role'

export interface UserParams {
  id: string
}

export interface UserResponse {
  id: string
  role: Role
  name: string
  links: Link[]
  phone: string
  email: string
  biography: string
  created_at: string
  updated_at: string
}

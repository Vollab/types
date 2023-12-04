import { Role } from './role'

export interface User {
  id: string
  name: string
  email: string
  phone: string
  biography: string

  role: Role
}

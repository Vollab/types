import { Role } from '../../shared/role'

export interface SignInRequest {
  email: string
  password: string
}

export interface User {
  id: string
  name: string
  phone: string
  email: string
  biography: string
  created_at: string
  updated_at: string
}

export type SignInResponse = Record<Partial<Role>, User>

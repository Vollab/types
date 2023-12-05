import { User } from '../../../../shared/user'

export interface Request {
  email: string
  password: string
}

export interface Response {
  user: User
}

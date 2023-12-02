import { Response as CurrentUserResponse } from '../../current-user/GET'

export interface Request {
  name: string
  email: string
  phone: string
  password: string
  biography: string
}

export interface Response {
  candidate: {
    id: string
    name: string
    email: string
    phone: string
    biography: string
  }
}

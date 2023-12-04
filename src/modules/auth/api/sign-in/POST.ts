import { Response as CurrentUserResponse } from '../current-user/GET'

export interface Request {
  email: string
  password: string
}

export interface Response extends CurrentUserResponse {}

import { Response as CurrentUserResponse } from 'src/modules/auth/api/current-user/GET'

export interface Params {
  id: string
}

export interface Response extends CurrentUserResponse {}

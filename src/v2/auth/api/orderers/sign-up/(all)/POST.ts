// Se não quiser implementar rota para cada step
// usar apenas a rota /orderers/signup com esta tipagem

import { Response as CurrentUserResponse } from '../../../current-user/GET'
import { Link } from '../../../../../shared/link'

export interface Request {
  email: string
  phone: string
  password: string

  name: string
  biography: string

  links?: Link[]
  avatar?: string
}

export interface Response extends CurrentUserResponse {}
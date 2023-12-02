// Se não quiser implementar rota para cada step
// usar apenas a rota /candidates/signup com esta tipagem
import { Response as CurrentUserResponse } from '../../../current-user/GET'
import { Link } from '../../../../../shared/link'
import { ActivityArea } from '../../../../../shared/activity_area'

export interface Request {
  name: string
  email: string
  phone: string
  password: string

  biography: string
  activity_areas: ActivityArea[]

  links?: Link[]
  avatar?: string
}

export interface Response extends CurrentUserResponse {}

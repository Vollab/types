// Se não quiser implementar rota para cada step
// usar apenas a rota /candidates/signup com esta tipagem

import { Link } from '../../../../../shared/link'

export interface Request {
  name: string
  email: string
  phone: string
  password: string

  biography: string
  activityAreas: { value: string; label: string }[]

  links?: Link[]
  avatar?: string
}

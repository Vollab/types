import { ActivityArea } from '../../../../../shared/activity_area'
import { Link } from '../../../../../shared/link'

export interface Params {
  id: string
}

export interface Response {
  candidate: {
    id: string
    name: string
    email: string
    phone: string
    biography: string

    links: Link[] | null
    activity_areas: ActivityArea[] | null
  }
}

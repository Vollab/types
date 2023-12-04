import { DemandStatus } from 'src/shared/demand'
import { Response as DemandResponse } from './GET'

export interface Params {
  id: string
}

export interface Request {
  title?: string
  resume?: string
  description?: string
}

export interface Response {
  demand: {
    id: string
    title: string
    resume: string
    description: string
    status: DemandStatus

    orderer: { id: string; name: string }
  }
}

import { DemandStatus } from '../../../../../shared/demand'

export interface Params {
  id: string
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

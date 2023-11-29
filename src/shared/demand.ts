export type DemandStatus = 'OPEN' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELED'

export interface Demand {
  id: string
  title: string
  resume: string
  orderer_id: string
  updated_at: string
  created_at: string
  description: string
  status: DemandStatus
}

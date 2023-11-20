import { DemandStatus } from 'src/types/api/shared/demand'

import { EnrollmentStatus } from 'types-vollab/dist/shared/enrollment'
import { VacancyWorkMode } from 'types-vollab/dist/shared/vacancy'

export interface Orderer {
  id: string
  name: string
  avatar?: string
}

export interface Vacancy {
  id: string
  open: boolean
  city: string
  name: string
  state: string
  street: string
  description: string
  status?: EnrollmentStatus
  work_mode: VacancyWorkMode
}

export interface DemandResponse {
  id: string
  title: string
  resume: string
  orderer: Orderer
  description: string
  status: DemandStatus
  vacancies: Vacancy[]
}

export interface DemandParams {
  id: string
}

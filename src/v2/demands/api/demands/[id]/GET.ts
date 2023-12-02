import { DemandStatus } from 'shared/demand'
import { EnrollmentStatus } from 'shared/enrollment'
import { VacancyWorkMode } from 'shared/vacancy'

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
    orderer: { id: string; name: string; avatar?: string }
    vacancies?: {
      id: string
      name: string
      city: string
      state: string
      open: boolean
      description: string
      work_mode: VacancyWorkMode
      enrollment?: { status: EnrollmentStatus }
      activity_area: { id: string; name: string }
    }[]
  }
}

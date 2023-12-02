import { DemandStatus } from '../../../../shared/demand'
import { VacancyWorkMode } from '../../../../shared/vacancy'
import { ActivityArea } from '../../../shared/activity_area'

export interface Response {
  demands: {
    id: string
    title: string
    resume: string
    status: DemandStatus
    orderer: { id: string; name: string; avatar?: string }
    vacancies?: {
      id: string
      work_mode: VacancyWorkMode
      activity_area: ActivityArea
    }[]
  }[]
}

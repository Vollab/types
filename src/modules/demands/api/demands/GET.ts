import { ActivityArea } from 'src/shared/activity_area'
import { DemandStatus } from 'src/shared/demand'
import { VacancyWorkMode } from 'src/shared/vacancy'

export interface Response {
  demands: {
    id: string
    title: string
    resume: string
    status: DemandStatus

    orderer: { id: string; name: string }

    vacancies?: {
      id: string
      work_mode: VacancyWorkMode
      activity_area: ActivityArea['name']
    }[]
  }[]
}

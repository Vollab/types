import { VacancyWorkMode } from '../../../../../../shared/vacancy'

export interface Params {
  demand_id: string
  vacancy_id: string
}

export interface Request {
  name?: string
  description?: string
  activity_area_id?: string
  work_mode?: VacancyWorkMode
}

import { VacancyWorkMode, Vacancy } from '../../../../../shared/vacancy'

export interface VacancyParams {
  id: string
  demandId: string
}

export interface VacancyRequest {
  name: string
  city: string
  state: string
  street: string
  description: string
  activity_area_id: string
  work_mode: VacancyWorkMode
}

export interface VacancyResponse {
  vacancy: Vacancy
}

import {  Vacancy } from '../../../../../shared/vacancy'

export interface VacancyParams {
  id: string
  demandId: string
}

export interface VacancyResponse {
  vacancy: Vacancy
}

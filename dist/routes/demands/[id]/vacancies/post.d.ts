import { Vacancy, VacancyWorkMode } from '../../../../shared/vacancy';
export interface VacanciesParams {
    id: string;
}
export interface VacanciesRequest {
    name: string;
    city: string;
    state: string;
    street: string;
    description: string;
    activity_area_id: string;
    work_mode: VacancyWorkMode;
}
export interface VacanciesResponse {
    vacancy: Vacancy;
}

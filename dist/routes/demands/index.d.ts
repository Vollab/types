import { DemandStatus } from '../../shared/demand';
import { VacancyWorkMode } from '../../shared/vacancy';
export interface Vacancy {
    id: string;
    name: string;
    work_mode: VacancyWorkMode;
}
export interface Orderer {
    id: string;
    name: string;
    avatar?: string;
}
export interface Demand {
    id: string;
    title: string;
    resume: string;
    orderer: Orderer;
    vacancies: Vacancy[];
    status: DemandStatus;
}
export interface DemandsResponse {
    demands: Demand[];
}

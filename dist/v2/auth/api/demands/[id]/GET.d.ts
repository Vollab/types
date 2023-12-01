import { DemandStatus } from '../../../../../shared/demand';
import { EnrollmentStatus } from '../../../../../shared/enrollment';
import { VacancyWorkMode } from '../../../../../shared/vacancy';
export interface Params {
    id: string;
}
export interface Response {
    demand: {
        id: string;
        title: string;
        resume: string;
        description: string;
        status: DemandStatus;
        enrollment?: {
            status: EnrollmentStatus;
        };
        orderer: {
            id: string;
            name: string;
            avatar?: string;
        };
        vacancies?: {
            id: string;
            work_mode: VacancyWorkMode;
            activity_area: {
                id: string;
                name: string;
            };
        }[];
    };
}

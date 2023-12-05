import { EnrollmentStatus } from '../../../../../../../shared/enrollment';
import { VacancyWorkMode } from '../../../../../../../shared/vacancy';
export interface Params {
    demand_id: string;
    vacancy_id: string;
}
export interface Request {
    name?: string;
    description?: string;
    activity_area_id?: string;
    work_mode?: VacancyWorkMode;
}
export interface Response {
    vacancy: {
        id: string;
        name: string;
        city: string;
        state: string;
        open: boolean;
        description: string;
        work_mode: VacancyWorkMode;
        enrollment?: {
            status: EnrollmentStatus;
        };
        activity_area: {
            id: string;
            name: string;
        };
    };
}

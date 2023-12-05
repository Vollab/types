import { ActivityArea } from '../../../../../shared/activity_area';
import { EnrollmentStatus } from '../../../../../shared/enrollment';
import { VacancyWorkMode } from '../../../../../shared/vacancy';
export interface Response {
    vacancies: {
        id: string;
        demand_id: string;
        name: string;
        open: string;
        description: string;
        work_mode: VacancyWorkMode;
        activity_area_id: ActivityArea['name'];
        enrollment: {
            status: EnrollmentStatus;
        };
    }[];
}

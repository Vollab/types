import { ActivityArea } from 'src/shared/activity_area';
import { EnrollmentStatus } from 'src/shared/enrollment';
import { VacancyWorkMode } from 'src/shared/vacancy';
export interface Response {
    id: string;
    demand_id: string;
    name: string;
    description: string;
    open: string;
    work_mode: VacancyWorkMode;
    activity_area_id: ActivityArea['name'];
    enrollment: {
        status: EnrollmentStatus;
    };
}

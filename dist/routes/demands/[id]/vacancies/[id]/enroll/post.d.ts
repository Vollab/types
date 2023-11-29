import { Enrollment } from '../../../../../../shared/enrollment';
export interface EnrollParams {
    demandId: string;
    vacancyId: string;
}
export interface EnrollResponse {
    enrollment: Enrollment;
}

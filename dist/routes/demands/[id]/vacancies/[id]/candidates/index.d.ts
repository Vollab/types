import { Enrollment } from '../../../../../../shared/enrollment';
export interface EnrollmentsParams {
    demandId: string;
    vacancyId: string;
}
export interface EnrollmentsResponse {
    enrollments: Enrollment[];
}

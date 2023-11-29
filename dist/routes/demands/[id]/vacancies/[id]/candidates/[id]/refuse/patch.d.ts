import { Enrollment } from '../../../../../../../../shared/enrollment';
export interface RefuseParams {
    demandId: string;
    vacancyId: string;
    candidateId: string;
}
export interface RefuseResponse {
    enrollment: Enrollment;
}

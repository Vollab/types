import { Enrollment } from '../../../../../../../../shared/enrollment'

export interface ApproveParams {
  demandId: string
  vacancyId: string
  candidateId: string
}

export interface ApproveResponse {
  enrollment: Enrollment
}

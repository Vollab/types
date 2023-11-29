import { Enrollment } from '../../../../../../../../shared/enrollment'

export interface AcceptParams {
  demandId: string
  vacancyId: string
  candidateId: string
}

export interface AcceptResponse {
  enrollment: Enrollment
}

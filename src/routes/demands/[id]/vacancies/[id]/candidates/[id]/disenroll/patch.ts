import { Enrollment } from '../../../../../../../../shared/enrollment'

export interface DisenrollParams {
  demandId: string
  vacancyId: string
  candidateId: string
}

export interface DisenrollResponse {
  enrollment: Enrollment
}

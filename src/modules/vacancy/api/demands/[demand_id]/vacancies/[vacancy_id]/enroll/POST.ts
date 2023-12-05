import { EnrollmentStatus } from '../../../../../../../../shared/enrollment'

export interface Params {
  demand_id: string
  vacancy_id: string
}

export interface Response {
  enrollment: { status: EnrollmentStatus }
}

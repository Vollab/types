export type EnrollmentStatus =
  | 'PENDING'
  | 'REFUSED'
  | 'APPROVED'
  | 'ACCEPTED'
  | 'WAIVER'

export interface Enrollment {
  vacancy_id: string
  created_at: string
  updated_at: string
  candidate_id: string
  status: EnrollmentStatus
}

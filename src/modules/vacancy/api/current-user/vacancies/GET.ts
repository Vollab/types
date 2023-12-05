import { ActivityArea } from '../../../../../shared/activity_area'
import { EnrollmentStatus } from '../../../../../shared/enrollment'
import { VacancyWorkMode } from '../../../../../shared/vacancy'

export interface Response {
  id: string
  demand_id: string

  name: string
  description: string
  open: string

  work_mode: VacancyWorkMode

  activity_area_id: ActivityArea['name']
  enrollment: { status: EnrollmentStatus }
}

export type VacancyWorkMode = 'REMOTE' | 'IN_PERSON' | 'HYBRID';
export interface Vacancy {
    id: string;
    name: string;
    city: string;
    open: boolean;
    state: string;
    street: string;
    demand_id: string;
    created_at: string;
    updated_at: string;
    description: string;
    activity_area_id: string;
    work_mode: VacancyWorkMode;
}

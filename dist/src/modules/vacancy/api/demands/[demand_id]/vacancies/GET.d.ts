import { VacancyWorkMode } from '../../../../../../shared/vacancy';
export interface Response {
    vacancies?: {
        id: string;
        name: string;
        open: boolean;
        city?: string;
        state?: string;
        description: string;
        work_mode: VacancyWorkMode;
        activity_area: {
            id: string;
            name: string;
        };
    }[];
}

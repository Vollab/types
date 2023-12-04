import { VacancyWorkMode } from 'src/shared/vacancy';
export interface Response {
    vacancies?: {
        id: string;
        name: string;
        open: boolean;
        description: string;
        work_mode: VacancyWorkMode;
        activity_area: {
            id: string;
            name: string;
        };
    }[];
}

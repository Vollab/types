import { Demand } from '../../shared/demand';
export interface DemandsRequest {
    title: string;
    resume: string;
    description: string;
}
export interface DemandsResponse {
    demands: Demand[];
}

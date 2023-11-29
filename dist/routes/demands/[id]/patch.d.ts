import { Demand } from '../../../shared/demand';
export interface DemandParams {
    id: string;
}
export interface DemandRequest {
    title: string;
    resume: string;
    description: string;
}
export interface DemandResponse {
    demand: Demand;
}

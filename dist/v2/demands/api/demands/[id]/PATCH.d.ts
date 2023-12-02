import { Response as DemandResponse } from './GET';
export interface Params {
    id: string;
}
export interface Request {
    title?: string;
    resume?: string;
    description?: string;
}
export interface Response extends DemandResponse {
}

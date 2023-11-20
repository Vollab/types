export interface Demand {
    id: string;
    title: string;
    resume: string;
    status: string;
    created_at: string;
    orderer_id: string;
    updated_at: string;
    description: string;
}
export type Demands = Demand[];
export interface DemandsResponse {
    demands: Demands;
}

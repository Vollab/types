export interface Demand {
  id: string;
  title: string;
  resume: string;
  orderer_id: string;
  created_at: string;
  updated_at: string;
  description: string;
  status: DemandStatus;
}

export type Demands = Demand[];

export type DemandStatus = "OPEN" | "IN_PROGRESS" | "COMPLETED" | "CANCELED";

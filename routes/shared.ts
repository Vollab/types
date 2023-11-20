export type VacancyWorkMode = "REMOTE" | "IN_PERSON" | "HYBRID";

export type DemandStatus = "OPEN" | "IN_PROGRESS" | "COMPLETED" | "CANCELED";

export type EnrollmentStatus =
  | "PENDING"
  | "REFUSED"
  | "APPROVED"
  | "ACCEPTED"
  | "WAIVER";

export type Role = "candidate" | "orderer";

export interface Link {
  href: string;
  label: string;
}

export interface ErrorResponse {
  message: string;
}

export interface Location {
  city: string;
  state: string;
}

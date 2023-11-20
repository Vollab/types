export interface CandidateSignUpRequest {
  name: string
  email: string
  phone: string
  password: string
  biography: string
}

export interface CandidateSignUpResponse {
  candidate: {
    id: string
    name: string
    phone: string
    email: string
    biography: string
    created_at: string
    updated_at: string
  }
}

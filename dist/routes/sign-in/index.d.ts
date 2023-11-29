import { User } from '../../shared/user';
export interface SignInRequest {
    email: string;
    password: string;
}
export interface SignInResponse {
    user: User;
}

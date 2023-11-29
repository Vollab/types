import { Role } from './role';
export interface User {
    id: string;
    role: Role;
    name: string;
    email: string;
    phone: string;
    biography: string;
    created_at: string;
    updated_at: string;
}

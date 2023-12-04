import { Role } from '../../../../shared/role';
export interface Response {
    user: {
        id: string;
        name: string;
        email: string;
        phone: string;
        biography: string;
        role: Role;
    };
}

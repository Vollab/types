import { Link } from 'src/shared/link';
export interface Params {
    id: string;
}
export interface Response {
    orderer: {
        id: string;
        name: string;
        email: string;
        phone: string;
        biography: string;
        links: Link[];
    };
}

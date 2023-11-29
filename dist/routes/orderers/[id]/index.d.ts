import { Link } from '../../../shared/link';
export interface OrdererParams {
    id: string;
}
export interface OrdererResponse {
    orderer: {
        id: string;
        name: string;
        email: string;
        phone: string;
        biography: string;
        created_at: string;
        updated_at: string;
        links: {
            id: Link['id'];
            url: Link['url'];
            text: Link['text'];
        }[];
    };
}

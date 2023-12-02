import { Response as CurrentUserResponse } from '../../../current-user/GET';
import { Link } from '../../../../../shared/link';
export interface Request {
    email: string;
    phone: string;
    password: string;
    name: string;
    biography: string;
    avatar?: string;
    links?: {
        text: Link['text'];
        url: Link['url'];
    }[];
}
export interface Response extends CurrentUserResponse {
}

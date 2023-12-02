import { Response as CurrentUserResponse } from '../../../current-user/GET';
import { Link } from '../../../../../shared/link';
import { ActivityArea } from '../../../../../shared/activity_area';
export interface Request {
    name: string;
    email: string;
    phone: string;
    password: string;
    biography: string;
    activity_areas: ActivityArea[];
    avatar?: string;
    links?: {
        text: Link['text'];
        url: Link['url'];
    }[];
}
export interface Response extends CurrentUserResponse {
}

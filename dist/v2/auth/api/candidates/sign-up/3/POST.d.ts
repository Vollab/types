import { Link } from '../../../../../shared/link';
import { Response as CurrentUserResponse } from '../../../current-user/GET';
export interface Request {
    links?: Link[];
    avatar?: string;
}
export interface Response extends CurrentUserResponse {
}

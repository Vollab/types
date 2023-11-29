import { Link } from '../../../shared/link';
export interface LinksRequest {
    text: Link['text'];
    url: Link['url'];
}
export interface LinksResponse {
    link: Link;
}

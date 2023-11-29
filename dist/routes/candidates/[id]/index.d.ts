import { ActivityArea } from '../../../shared/activity-area';
import { Link } from '../../../shared/link';
export interface CandidatesParams {
    id: string;
}
export interface CandidatesResponse {
    candidates: {
        id: string;
        name: string;
        email: string;
        phone: string;
        biography: string;
        created_at: string;
        updated_at: string;
        activity_areas: {
            id: ActivityArea['id'];
            name: ActivityArea['name'];
        }[];
        links: {
            id: Link['id'];
            url: Link['url'];
            text: Link['text'];
        }[];
    };
}

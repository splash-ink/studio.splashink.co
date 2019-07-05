import { firestore } from 'firebase';

export interface PostModel {
    pid?: string | number;
    coupon?: string;
    thumbnail: string;
    title: string;
    body: string;
    tags: Array<string>;
    updatedAt: firestore.Timestamp;
}

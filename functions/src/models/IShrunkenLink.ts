import { Document } from 'mongoose';

export interface IShrunkenLink extends Document {
    _id: string;
    originalLink?: string;
    shortLink?: string;
    clicks?: number;
    created?: Date;
}
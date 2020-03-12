import * as mongoose from 'mongoose';

const randomId = (): string => {
    return Math.random().toString(36).substr(2, 9);
}

const schema = new mongoose.Schema({
    originalLink: {
        required: true,
        type: String
    },
    shortLink: {
        required: true,
        type: String,
        default: randomId()
    },
    clicks: {
        required: true,
        default: 0,
        type: Number
    },
    created: {
        required: true,
        default: Date.now,
        type: Date
    }
});

export const ShrunkenLink = mongoose.model('ShrunkenLink', schema);

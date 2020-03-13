import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  originalLink: {
    required: true,
    type: String
  },
  shortLink: {
    required: true,
    type: String
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

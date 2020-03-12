import * as cors from 'cors';
import * as express from 'express';
import * as functions from 'firebase-functions';
import * as mongoose from 'mongoose';
import config from './config/config';
import root from './routes/root';

const app = express();

app.use(cors());
app.use(root)

const { MONGO_URI } = config;

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true })
    .catch(err => console.log(err));

exports.shorter = functions.https.onRequest(app);
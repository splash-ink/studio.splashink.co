import * as functions from 'firebase-functions';
import * as cors from 'cors';
import * as express from 'express';
import * as admin from 'firebase-admin';

/// get elements & init app
admin.initializeApp();
const db = admin.firestore();

/// setup express application
const app = express();
app.use(cors({ origin: true }));

//#region CALLS

    app.get('/galleries', (request, response) => {
        const payload: Array<any> = [];

        return db.collection('galleries')
        .get()
        .then((snapshoot) => {
            snapshoot.docs.forEach(doc => {
                payload.push(doc.data());
            });
            response.send({ payload });
        });
    });

//#endregion

/// assigning express config to 🔥 Cloud Functions
export const api = functions.https.onRequest(app);

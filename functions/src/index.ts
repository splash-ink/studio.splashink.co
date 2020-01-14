import * as functions from 'firebase-functions';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { AppModule } from './app/app.module';

const server = express();

const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  return app.init();
};


createNestServer(server)
    .then(v => console.log('😻 Nest Ready'))
    .catch(err => console.error('💔 Nest broken', err));

export const api = functions.https.onRequest(server);
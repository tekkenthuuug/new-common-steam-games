import express from 'express';
import cors from 'cors';
import 'dotenv-safe/config';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import 'reflect-metadata';
import { SteamUserResolver } from './resolvers/steamUser';
import SteamAPI from 'type-steamapi';

(async () => {
  const app = express();

  app.set('trust proxy', 1);

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  const steam = new SteamAPI({ apiKey: process.env.STEAM_SECRET_KEY });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [SteamUserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      steam,
    }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(parseInt(process.env.PORT), () => {
    console.log('Server is listening');
  });
})().catch(error => {
  console.log(error);
});

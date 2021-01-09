import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import schema from "./schema";
import BooksAPI from "./datasources/books-api";
import * as secret from './secret/api-key.json';

const app = express();

const server = new ApolloServer({
  schema,
  playground: true,
  dataSources: () => {
    return {
      booksAPI: new BooksAPI()
    };
  },
  context: () => {
    return {
      token: secret?.googleBooksApiKey,
    };
  },
});

app.use("*", cors());

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: 8000 }, () => {
  console.log("Apollo Server on http://localhost:8000/graphql");
});
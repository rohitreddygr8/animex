import { config } from "dotenv";
import schema from "./graphql/schema.js";
import express from "express";
import { graphqlHTTP } from "express-graphql";

config({ path: "../config/.env" });
const PORT = Number(process.env.PORT || 4000);
const HOST = process.env.NODE_ENV === "production" ? "0.0.0.0" : "127.0.0.1";
const ORIGIN_URL = process.env.NODE_ENV === "production" ? process.env.ORIGIN_URL : "127.0.0.1";
const server = express();
server.use(express.static("../../client/dist/"));

server.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV !== "production",
  })
);

server.listen(PORT, HOST, () => {
  console.log(`Listening to http://${HOST}:${PORT}`);
});

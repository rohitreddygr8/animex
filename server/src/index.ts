import { config } from "dotenv";
import schema from "./graphql/schema.js";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";

config({ path: "../.env" });
const PORT = Number(process.env.PORT || 4000);
const HOST = process.env.NODE_ENV === "production" ? "0.0.0.0" : "127.0.0.1";
const server = express();

server.use(cors());
server.use(express.static("../../client/dist/"));

server.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV !== "production",
  })
);

server.listen(PORT, HOST, () => {
  console.log(`Server is listening to http://${HOST}:${PORT}`);
});

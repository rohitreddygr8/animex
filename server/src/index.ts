import { config } from "dotenv";
import cors from "cors";
import express from "express";
import schema from "./graphql/schema.js";
import { graphqlHTTP } from "express-graphql";

config({ path: "../.env" });
const PORT = Number(process.env.PORT || 4000);
const HOST = process.env.HOST || "127.0.0.1";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("../../client/dist/"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV !== "production",
  })
);

app.listen(PORT, HOST, () => {
  console.log(`✨ Server is running on http://${HOST}:${PORT} ✨`);
});

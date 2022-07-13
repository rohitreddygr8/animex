import { config } from "dotenv";
import helmet from "helmet";
import express from "express";
import schema from "./graphql/schema.js";
import { graphqlHTTP } from "express-graphql";

config({ path: "../.env" });
const PORT = Number(process.env.PORT || 4000);
const HOST = process.env.HOST || "127.0.0.1";
const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
  express.text(),
  express.json(),
  express.static("../../client/dist/")
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, HOST, () => {
  console.log(`\n✨ Server is running on \u001b[35;1m http://${HOST}:${PORT} ✨`);
});

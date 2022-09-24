import { graphqlHTTP } from "express-graphql";
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import pg from "pg";
import schema from "./graphql/schema.js";
import proxyHandler from "./controllers/proxy.controller.js";
import { authHandler } from "./controllers/auth.controller.js";
config({ path: "../config/.env" });

const { NODE_ENV, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_URL } = process.env;
const PORT = Number(process.env.PORT || 7000);
const HOST = "0.0.0.0";
const app = express();
const { Pool } = pg;

// const pool = new Pool({
//   connectionString: DB_URL,
//   ssl: { rejectUnauthorized: false },
// });

// pool
//   .connect()
//   .then(() => {
//     console.log("connected to db!!!");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

app.use(
  // helmet({ contentSecurityPolicy: NODE_ENV === "development" ? false : undefined }),
  cors(),
  express.text(),
  express.json(),
  express.static("../../client/dist/")
);

if (process.env.NODE_ENV === "development") {
  app.get(
    "/api/graphql",
    graphqlHTTP({
      schema,
      pretty: true,
      graphiql: { headerEditorEnabled: true },
    })
  );
}
app.get("/api/proxy", proxyHandler);
app.post("/api/auth", authHandler);
app.post("/api/graphql", graphqlHTTP({ schema }));

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, HOST, () => {
  console.log(
    `✨ Server is running on \u001b[35;1mhttp://${HOST}:${PORT}\u001b[0m in \u001b[37;1m${NODE_ENV}\u001b[0m environment ✨`
  );
});

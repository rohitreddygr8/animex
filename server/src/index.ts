import { graphqlHTTP } from "express-graphql";
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import schema from "./graphql/schema.js";
import proxyHandler from "./controllers/proxy.controller.js";

config({ path: "../config/.env" });
const { NODE_ENV } = process.env;
const PORT = Number(process.env.PORT || 7000);
const HOST = NODE_ENV === "production" ? "0.0.0.0" : "localhost";
const app = express();

app.use(
  // helmet({ contentSecurityPolicy: NODE_ENV === "development" ? false : undefined }),
  cors(),
  express.text(),
  express.json(),
  express.static("../../client/dist/")
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development" ? { headerEditorEnabled: true } : false,
  })
);

app.use("/proxy", proxyHandler);

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, HOST, () => {
  console.log(
    `✨ Server is running on \u001b[35;1mhttp://${HOST}:${PORT}\u001b[0m in \u001b[37;1m${NODE_ENV}\u001b[0m environment ✨`
  );
});

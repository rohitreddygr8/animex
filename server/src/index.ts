import cors from "cors";
import express from "express";
import { schema } from "./graphql/schema.js";
import { proxyController } from "./controllers/proxy-controller.js";
import { authController } from "./controllers/auth-controller.js";
import { graphqlHTTP } from "express-graphql";
import { wildcardController } from "./controllers/wildcard-controller.js";
import { secrets } from "./utils/secrets.js";
import { connectToDb } from "./utils/database.js";

const { PORT, HOST, NODE_ENV } = secrets;
const server = express();
connectToDb();

server.use(cors(), express.text(), express.json(), express.static("../../client/dist/"));
server.post("/api/graphql", graphqlHTTP({ schema }));
server.post("/api/auth", authController);
server.get("/api/proxy", proxyController);
server.get("*", wildcardController);

if (process.env.NODE_ENV === "development") {
  server.get(
    "/api/graphql",
    graphqlHTTP({
      schema,
      pretty: true,
      graphiql: { headerEditorEnabled: true },
    })
  );
}

server.listen(PORT, HOST, () => {
  const ENV = NODE_ENV === "development" ? `\u001b[33;1m${NODE_ENV}` : `\u001b[32;1m${NODE_ENV}`;
  console.log(
    `\u001b[37;1mServer is listening to \u001b[35;1mhttp://${HOST}:${PORT}\u001b[0m \u001b[37;1mand running in ${ENV}\u001b[0m \u001b[37;1menvironment...`
  );
});

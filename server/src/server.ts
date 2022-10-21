import express from "express";
import { secrets } from "./utils/secrets.js";
import { connectToDb } from "./utils/database.js";
import { router } from "./router.js";
import { wildcardHandler } from "./controllers/wildcard.js";

connectToDb();
const server = express();
const { PORT, HOST, NODE_ENV } = secrets;

server.use(express.static("../../client/dist/"));
server.use("/api", router);
server.use("*", wildcardHandler);

server.listen(PORT, HOST, () => {
  const ENV = NODE_ENV === "development" ? `\u001b[33;1m${NODE_ENV}` : `\u001b[32;1m${NODE_ENV}`;
  console.log(
    `\u001b[37;1mServer is listening to \u001b[35;1mhttp://${HOST}:${PORT}\u001b[0m \u001b[37;1mand running in ${ENV}\u001b[0m \u001b[37;1menvironment...`
  );
});

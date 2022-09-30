import express from "express";
import { schema } from "./graphql/schema.js";
import { proxyController } from "./controllers/proxy-controller.js";
import { authController } from "./controllers/auth-controller.js";
import { graphqlHTTP } from "express-graphql";
import { wildcardController } from "./controllers/wildcard-controller.js";
import { secrets } from "./utils/secrets.js";

const { NODE_ENV } = secrets;
export const router = express.Router();

router.use(express.text(), express.json());
router.use(
  "/graphql",
  graphqlHTTP({ schema, graphiql: NODE_ENV === "development" ? { headerEditorEnabled: true } : false })
);
router.post("/auth", authController);
router.get("/proxy", proxyController);
router.get("*", wildcardController);

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { graphqlHTTP } from "express-graphql";
import { secrets } from "./utils/secrets.js";
import { schema } from "./graphql/schema.js";
import { proxyHandler } from "./controllers/proxy.js";
import { signUpHandler } from "./controllers/signup.js";
import { logInHandler } from "./controllers/login.js";
import { resetHandler } from "./controllers/reset-password.js";
import { emailHandler } from "./controllers/add-email.js";
import { searchHandler } from "./controllers/search/search.js";
import { addToWatchListHandler } from "./controllers/add-to-watch-list/add-to-watch-list.js";
import { removeFromWatchListHandler } from "./controllers/remove-watch-list/remove-watch-list.js";
import { getWatchListHandler } from "./controllers/get-watch-list/get-watch-list.js";
import { defaultHandler } from "./controllers/default/defaultHandler.js";

const { NODE_ENV } = secrets;
export const router = express.Router();

router.use(cors(), cookieParser(), express.text(), express.json());
router.use(
  "/graphql",
  graphqlHTTP({ schema, graphiql: NODE_ENV === "development" ? { headerEditorEnabled: true } : false })
);
router.get("/", defaultHandler);
router.post("/signup", signUpHandler);
router.post("/login", logInHandler);
router.post("/add-email", emailHandler);
router.post("/reset-password", resetHandler);
router.post("/watch-list", addToWatchListHandler);
router.delete("/watch-list", removeFromWatchListHandler);
router.get("/watch-list", getWatchListHandler);
router.get("/proxy", proxyHandler);
router.get("/search", searchHandler);

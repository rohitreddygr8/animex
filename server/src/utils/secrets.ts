import { config } from "dotenv";

config({ path: "../.env" });
const { NODE_ENV, DB_URL } = process.env;
const PORT = Number(process.env.PORT || 4000);
const HOST = "0.0.0.0";

export const secrets = { PORT, HOST, NODE_ENV, DB_URL };

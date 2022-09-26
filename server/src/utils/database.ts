import pg from "pg";
import { secrets } from "./secrets.js";
const { Pool } = pg;
const { DB_URL } = secrets;

export const pool = new Pool({
  connectionString: DB_URL,
});

export const connectToDb = async () => {
  try {
    await pool.connect();
    console.log("\u001b[37;1mConnected to remote PostgreSQL Database... 🌏🐘");
  } catch (err) {
    console.log("\u001b[31;1mError: Server could not connect to remote PostgreSQL Database");
    console.error(err);
  }
};

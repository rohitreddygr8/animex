import { RequestHandler } from "express";
import crypto from "node:crypto";

import { pool } from "../utils/database.js";

export const logInHandler: RequestHandler = async (req, res) => {
  const { username, password } = req.body;

  const query = await pool.query("SELECT password,salt FROM users WHERE username=$1", [username]);
  if (query.rowCount === 0) {
    res.send("USER DOES NOT EXIST");
  } else {
    const { password: dbPassword, salt: dbSalt } = query.rows[0];
    const hashedPassword = crypto.scryptSync(password, dbSalt, 512, { N: 512 }).toString("hex");
    if (hashedPassword === dbPassword) {
      res.send("LOGIN SUCCESSFUL");
    } else {
      res.send("INVALID LOGIN");
    }
  }
};

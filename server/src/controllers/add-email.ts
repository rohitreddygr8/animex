import { RequestHandler } from "express";
import { pool } from "../utils/database.js";

export const emailHandler: RequestHandler = (req, res) => {
  const { email, username } = JSON.parse(req.body);
  pool.query("UPDATE users SET email=$1 where username=$2", [email, username]).then(() => {
    res.send("ADDED EMAIL SUCCESSFULLY");
  });
};

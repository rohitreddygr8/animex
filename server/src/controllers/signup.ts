import { RequestHandler } from "express";
import crypto, { randomUUID } from "node:crypto";
import { pool } from "../utils/database.js";
import { getToken } from "../utils/jsonWebToken.js";

export const signUpHandler: RequestHandler<any, string, { username: string; password: string }> = async (req, res) => {
  const { username, password } = req.body;
  const query = await pool.query("SELECT * from users where username=$1", [username]);
  if (query.rowCount !== 0) {
    return res.status(401).send("Error: Username not available");
  }
  const id = randomUUID();
  const salt = crypto.randomBytes(64).toString("hex");
  const hashedPassword = crypto.scryptSync(password, salt, 512, { N: 512 }).toString("hex");
  await pool.query("INSERT INTO users (id,username,password,salt) VALUES ($1,$2,$3,$4)", [
    id,
    username,
    hashedPassword,
    salt,
  ]);
  const token = getToken({ username }, { expiresIn: "30d" });
  res.cookie("token", token, { httpOnly: true, secure: true, sameSite: true });

  return res.send("Successfully signed up");
};

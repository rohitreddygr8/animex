import { RequestHandler } from "express";
import { pool } from "../../utils/database.js";
import { verifyToken } from "../../utils/jsonWebToken.js";

interface AuthToken {
  username: string;
  iat: number;
  exp: number;
}

export const getWatchListHandler: RequestHandler = async (req, res) => {
  const { token } = req.cookies;
  const { username } = verifyToken(token) as AuthToken;
  const query = await pool.query("SELECT watch_list FROM users where username=$1;", [username]);
  return res.send(query.rows[0].watch_list);
};

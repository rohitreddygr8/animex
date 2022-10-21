import { RequestHandler } from "express";
import { pool } from "../../utils/database.js";
import { verifyToken } from "../../utils/jsonWebToken.js";

interface AuthToken {
  username: string;
  iat: number;
  exp: number;
}

export const addToWatchListHandler: RequestHandler = async (req, res) => {
  const { token } = req.cookies;
  const { username } = verifyToken(token) as AuthToken;
  const query = await pool.query("SELECT watch_list FROM users where username=$1;", [username]);

  if (query.rows[0].watch_list) {
    const updatedWatchList = [...new Set(query.rows[0].watch_list.split(",")).add(req.body)].join(",");
    console.log(updatedWatchList);
    await pool.query("UPDATE users SET watch_list=$1 WHERE username=$2;", [updatedWatchList, username]);
  } else {
    await pool.query("UPDATE users SET watch_list=$1 WHERE username=$2;", [req.body, username]);
  }

  return res.sendStatus(200);
};

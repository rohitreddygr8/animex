import { RequestHandler } from "express";
import crypto, { webcrypto } from "node:crypto";

export const authHandler: RequestHandler = (req, res) => {
  const { username, password } = JSON.parse(req.body);
  const a = new Uint32Array(5);
  webcrypto.getRandomValues(a);
  let salt = "";
  a.forEach((num) => {
    salt = salt + num.toString(36);
  });
  const hashedPassword = crypto.scryptSync(password, salt, 512, { N: 512 }).toString("hex");
  console.log(hashedPassword);

  res.send(hashedPassword);
};

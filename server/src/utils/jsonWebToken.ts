import jwt from "jsonwebtoken";
import { secrets } from "./secrets.js";
const secretKey = secrets.SECRET_KEY as string;

export const getToken = (payload: string | object | Buffer, options?: jwt.SignOptions) => {
  return jwt.sign(payload, secretKey, options);
};

export const verifyToken = (token: string, options?: jwt.VerifyOptions) => {
  return jwt.verify(token, secretKey, options);
};

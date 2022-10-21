import { RequestHandler } from "express";

export const authMiddleware: RequestHandler = (req, res, next) => {
  const { token } = req.cookies;

  next();
};

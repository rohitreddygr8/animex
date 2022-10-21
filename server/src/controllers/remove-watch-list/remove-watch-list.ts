import { RequestHandler } from "express";

export const removeFromWatchListHandler: RequestHandler = (req, res) => {
  return res.send("deleted :0");
};

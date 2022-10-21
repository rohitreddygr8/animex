import { RequestHandler } from "express";

export const wildcardHandler: RequestHandler = (req, res) => {
  if (req.headers.accept?.includes("text/html")) {
    return res.sendFile("index.html", { root: "../../client/dist" });
  } else {
    return res.sendStatus(404);
  }
};

import { RequestHandler } from "express";
import { scrapeSearch } from "../../libs/gogoanime-api/anime_parser.js";

export const searchHandler: RequestHandler = async (req, res) => {
  const { keyword, page } = req.query;
  try {
    if (keyword) {
      const results = await scrapeSearch({ keyw: keyword, page: Number(page) || 1 });
      return res.send(results);
    } else {
      throw new Error("Error: Keyword is not present in query.");
    }
  } catch (err) {
    const { message } = err as Error;
    return res.status(400).send(message);
  }
};

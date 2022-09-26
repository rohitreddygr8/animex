import { request, RequestOptions } from "https";
import { RequestHandler } from "express";
import { scrapeMP4 } from "../libs/gogoanime-api/anime_parser.js";

export const proxyController: RequestHandler = async (req, res) => {
  const { episodeId } = req.query;
  const response = await scrapeMP4({ id: episodeId });
  const referer = response.Referer;
  //@ts-ignore
  const src = response.sources[0].file;

  const options: RequestOptions = {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
      Referer: referer as string,
    },
  };
  const proxyRequest = request(src as string, options, (proxyResponse) => {
    proxyResponse.pipe(res);
  });
  proxyRequest.end();
};

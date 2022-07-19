import { request, RequestOptions } from "https";
import { RequestHandler } from "express";

const proxyHandler: RequestHandler = (req, res) => {
  const { referer, src } = req.query;
  const userAgent =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36";
  const options: RequestOptions = {
    headers: {
      "User-Agent": userAgent,
      Referer: referer as string,
    },
  };
  const proxyRequest = request(src as string, options, (proxyResponse) => {
    proxyResponse.pipe(res);
  });
  proxyRequest.end();
};

export default proxyHandler;

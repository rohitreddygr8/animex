import { request, RequestOptions } from "https";
import { graphqlHTTP } from "express-graphql";
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import schema from "./graphql/schema.js";
import generateTypes from "./generateTypes.js";
config({ path: "../.env" });
import { createServer as createViteServer } from "vite";
import { resolve } from "path";
import { readFileSync } from "fs";
const PORT = Number(process.env.PORT || 9000);
const HOST = process.env.HOST || "127.0.0.1";
const app = express();

app.use(cors(), express.text(), express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.get("/proxy", (req, res) => {
  const { referer, src } = req.query;
  const options: RequestOptions = {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
      Referer: referer as string,
    },
  };
  const reqs = request(src as string, options, (response) => {
    response.pipe(res);
  });
  reqs.end();
});

if (process.env.NODE_ENV !== "development") {
  app.use(express.static("../../client/dist/"));
}

if (process.env.NODE_ENV === "development") {
  const vite = await createViteServer({
    configFile: "../../client/vite.config.ts",
    server: { middlewareMode: true },
    root: "../../client/",
  });

  app.use(vite.middlewares);

  app.use("/", async (req, res, next) => {
    const url = req.url;
    try {
      let template = readFileSync("../../client/index.html", "utf-8");
      template = await vite.transformIndexHtml(url, template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

app.listen(PORT, HOST, async () => {
  await generateTypes();
  console.log(`\n✨ Server is running on \u001b[35;1m http://${HOST}:${PORT} ✨`);
});

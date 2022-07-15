import { request, RequestOptions } from "https";
import { graphqlHTTP } from "express-graphql";
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import schema from "./graphql/schema.js";
config({ path: "../.env" });
const PORT = Number(process.env.PORT || 4000);
const HOST = process.env.HOST || "127.0.0.1";
const app = express();

app.use(cors(), express.text(), express.json(), express.static("../../client/dist/"));

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

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
    pretty: true,
  })
);

app.listen(PORT, HOST, () => {
  console.log(`\n✨ Server is running on \u001b[35;1m http://${HOST}:${PORT} ✨`);
});

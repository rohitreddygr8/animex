import { config } from "dotenv";
import helmet from "helmet";
import express from "express";
import schema from "./graphql/schema.js";
import { graphqlHTTP } from "express-graphql";
import axios from "axios";
import { extractStreamSB } from "./gogoanime-api/helpers/extractors/streamsb.js";

config({ path: "../.env" });
const PORT = Number(process.env.PORT || 4000);
const HOST = process.env.HOST || "127.0.0.1";
const app = express();

app.use(express.text(), express.json(), express.static("../../client/dist/"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
// extractStreamSB("https://ssbstream.net/e/8dijki3jrtny").then((res) => {
//   console.log(res);
// });
// var http = require("http");

var options = {
  hostname:
    "https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/6310593120001/8fe793c2-4356-402b-b761-9208c4bafdec/6s/master.m3u8?fastly_token=NjJjZWU0MDdfM2YzOTRhMmRmZmI4MjU0ZmEyMjBhNjM2MGU1YTNkODViNWU3YjhmOWVlY2NjNmFlYzllYTM5ZGQwMTdiNzUzNQ%3D%3D",
  path: "/test",
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
    Referer: "https://goload.pro/streaming.php?id=MzU0NA==&title=One+Piece+Episode+9&typesub=SUB",
    Cookie: "COOKIE_NAME=value; COOKIE_NAME=value",
  },
};

// app.get("/test", (req, res) => {
//   req.pipe(req.get(options)).pipe(res);
// });

// app.get("/test", (req, res) => {
//   res.setHeader("Content-Type", "video/m3u8");
//   res.send(
//     extractStreamSB(
//       "https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/6310593120001/8fe793c2-4356-402b-b761-9208c4bafdec/6s/master.m3u8?fastly_token=NjJjZWU0MDdfM2YzOTRhMmRmZmI4MjU0ZmEyMjBhNjM2MGU1YTNkODViNWU3YjhmOWVlY2NjNmFlYzllYTM5ZGQwMTdiNzUzNQ%3D%3D"
//     )
//   );
// });

app.listen(PORT, HOST, () => {
  console.log(`\n✨ Server is running on \u001b[35;1m http://${HOST}:${PORT} ✨`);
});

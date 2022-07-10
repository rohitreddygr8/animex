import { config } from "dotenv";
import schema from "./graphql/schema.js";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { WebSocketServer } from "ws";
import { createServer } from "http";

config({ path: "../.env" });
const PORT = Number(process.env.PORT || 4000);
const HOST = process.env.NODE_ENV === "production" ? "0.0.0.0" : "127.0.0.1";
const server = createServer();
const app = express();

const wss = new WebSocketServer({ server }, () => {
  console.log("websockets active");
});

wss.on("connection", function connection(ws) {
  ws.on("message", function message(data) {
    console.log(String(data));
  });

  ws.send("something");
});

app.use(cors());
app.use(express.static("../../client/dist/"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV !== "production",
  })
);

server.listen(PORT, HOST, () => {
  console.log(`Server is listening to http://${HOST}:${PORT}`);
});

server.on("request", app);

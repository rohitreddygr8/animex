import { config } from "dotenv";
import cors from "cors";
import express from "express";
import { graphql } from "graphql";
import schema from "./graphql-schema.js";

config({ path: "../.env" });
const PORT = Number(process.env.PORT || 4000);
const HOST = process.env.LOCAL_ADDRESS || "127.0.0.1";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("../../client/dist/"));
app.use("/graphql", (req, res, next) => {
  graphql({
    schema: schema,
    source: req.body.query,
  }).then((response) => {
    res.send(response.data);
  });
  next();
});

app.listen(PORT, HOST, () => {
  console.log(`✨ SERVER IS RUNNING ON http://${HOST}:${PORT} ✨`);
});

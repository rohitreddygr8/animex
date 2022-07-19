import { generate } from "@graphql-codegen/cli";
import { writeFileSync } from "fs";
import { printSchema } from "graphql";
import schema from "./graphql/schema.js";
import { resolve } from "path";

export default async function codegen() {
  writeFileSync("../src/graphql/schema.gql", printSchema(schema));
  writeFileSync("../dist/graphql/schema.gql", printSchema(schema));
  const generatedFiles = await generate(
    {
      schema: "./graphql/schema.gql",
      generates: {
        ["../../client/src/types/graphql.d.ts"]: {
          plugins: ["typescript"],
        },
        ["../../server/src/types/graphql.d.ts"]: {
          plugins: ["typescript"],
        },
      },
    },
    true
  );
}

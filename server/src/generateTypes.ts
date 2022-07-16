import { generate } from "@graphql-codegen/cli";
import { writeFileSync } from "fs";
import { printSchema } from "graphql";
import schema from "./graphql/schema.js";

export default async function generateTypes() {
  if (process.env.NODE_ENV === "development") {
    writeFileSync("../dist/graphql/schema.gql", printSchema(schema));
    const generatedFiles = await generate(
      {
        schema: "../dist/graphql/schema.gql",
        generates: {
          ["../src/types/graphql.d.ts"]: {
            plugins: [
              "typescript",
              "typescript-operations",
              "typescript-resolvers",
              "typescript-react-query",
              "typed-document-node",
            ],
          },
          ["../../client/src/types/graphql.d.ts"]: {
            plugins: [
              "typescript",
              "typescript-operations",
              "typescript-resolvers",
              "typescript-react-query",
              "typed-document-node",
            ],
          },
        },
      },
      true
    );
  }
}

import * as dotenv from "dotenv";
import { CodegenConfig } from "@graphql-codegen/cli";

dotenv.config();

const config: CodegenConfig = {
  schema: process.env.REACT_APP_GRAPHQL_API,
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      schema: "./schema.graphql",
    },
  },
  ignoreNoDocuments: true,
};

export default config;

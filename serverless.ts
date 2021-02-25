import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  org: "lukehedger",
  app: "sls-ts",
  service: "hello-world",
  frameworkVersion: "*",
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
  },
  functions: {
    hello: {
      handler: "handler.hello",
      events: [
        {
          http: {
            method: "get",
            path: "hello",
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;

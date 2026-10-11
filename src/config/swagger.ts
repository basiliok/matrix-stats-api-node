import swaggerJSDoc from "swagger-jsdoc";

export const createOpenApiSpecification = (annotatedFilePaths: string[]): object => {
  const globCompatibleFilePaths = annotatedFilePaths.map((filePath) => filePath.replaceAll("\\", "/"));

  return swaggerJSDoc({
    definition: {
      openapi: "3.1.0",
      info: {
        title: "matrix-stats-api-node",
        version: "1.0.0",
        description: "Statistics over a set of matrices.",
      },
    },
    apis: globCompatibleFilePaths,
  });
};

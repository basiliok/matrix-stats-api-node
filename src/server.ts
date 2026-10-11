import { fileURLToPath } from "node:url";
import express, { type Request, type Response } from "express";
import swaggerUi from "swagger-ui-express";
import { createOpenApiSpecification } from "./config/swagger.ts";
import { DEFAULT_PORT } from "./constants/server.constants.ts";
import type { HealthResponse } from "./interfaces/health-response.interface.ts";

const port = Number(process.env.PORT) || DEFAULT_PORT;

const app = express();

/**
 * @openapi
 * /health:
 *   get:
 *     summary: Check that the service is running
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: The service is running.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 service:
 *                   type: string
 */
app.get("/health", (_request: Request, response: Response<HealthResponse>) => {
  response.json({ status: "ok", service: "matrix-stats-api-node" });
});

const openApiSpecification = createOpenApiSpecification([fileURLToPath(import.meta.url)]);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(openApiSpecification));

app.listen(port, (listenError) => {
  if (listenError) {
    console.error(`server stopped: ${listenError.message}`);
    process.exit(1);
  }

  console.log(`Server listening on port ${port}`);
});

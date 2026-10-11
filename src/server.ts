import express, { type Request, type Response } from "express";
import { DEFAULT_PORT } from "./constants/server.constants.ts";
import type { HealthResponse } from "./interfaces/health-response.interface.ts";

const port = Number(process.env.PORT) || DEFAULT_PORT;

const app = express();

app.get("/health", (_request: Request, response: Response<HealthResponse>) => {
  response.json({ status: "ok", service: "matrix-stats-api-node" });
});

app.listen(port, (listenError) => {
  if (listenError) {
    console.error(`server stopped: ${listenError.message}`);
    process.exit(1);
  }

  console.log(`Server listening on port ${port}`);
});

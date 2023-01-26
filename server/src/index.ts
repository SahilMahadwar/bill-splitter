import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";

// Get Env Vars
dotenv.config({ path: path.join(__dirname, "../../.env") });

import { appRouter } from "./root";
import { createContext } from "./trpc";

// Init Express App
const app: Express = express();

app.use(
  cors({
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TRPC + TypeScript Server");
});

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: createContext,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

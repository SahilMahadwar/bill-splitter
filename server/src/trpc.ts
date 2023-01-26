import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

// Init Context
export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({ req, res });

export type Context = inferAsyncReturnType<typeof createContext>;

// Init TRPC
const t = initTRPC.context().create();
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

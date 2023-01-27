import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import superjson from "superjson";

import { prisma } from "./db/client";

type CreateContextOptions = Record<string, never>;

const createInnerTRPCContext = async (opts?: CreateContextOptions) => {
  return {
    prisma: prisma,
  };
};

export const createTRPCContext = async (
  opts: trpcExpress.CreateExpressContextOptions
) => {
  const contextInner = await createInnerTRPCContext();

  return { ...contextInner, req: opts.req, res: opts.res };
};

type Context = inferAsyncReturnType<typeof createTRPCContext>;

// Init TRPC
const t = initTRPC.context<Context>().create({
  transformer: superjson,
});
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

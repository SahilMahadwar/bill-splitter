import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input, ctx }) => {
      const users = await ctx.prisma.user.findMany();

      console.log(users);

      return {
        greeting: `Hello ${input.name}`,
      };
    }),
});

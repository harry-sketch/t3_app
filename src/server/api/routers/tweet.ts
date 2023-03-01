import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const tweetRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        tweet: z.string({ required_error: "tweet required" }),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.tweet.create({
        data: {
          tweet: input.tweet,
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),

  getAll: publicProcedure.input(z.object({})).query(({ ctx, input }) => {
    return ctx.prisma.tweet.findMany({});
  }),
});

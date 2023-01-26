// utils/trpc.ts
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../server/src/root";
export const trpc = createTRPCReact<AppRouter>();

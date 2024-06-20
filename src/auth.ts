import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { getUserById } from "./data/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async signIn({ user, account }) {
      const existingUser = await getUserById(user.id as string);
      if (account?.type !== "credentials") {
        if (existingUser && !existingUser.emailVerified) {
          await db.user.update({
            where: {
              id: existingUser.id,
            },
            data: {
              emailVerified: true,
            },
          });
        }
        return true;
      }
      if (!existingUser || !existingUser.emailVerified) {
        return false;
      }
      return true;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});

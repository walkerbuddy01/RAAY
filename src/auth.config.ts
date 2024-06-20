import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";
import google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./data/user";
import { signInZodSchema } from "./zodSchema";
import * as bcrypt from "bcryptjs";

export default {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validateData = signInZodSchema.safeParse(credentials);
        if (!validateData.success) {
          return null;
        }
        const { email, password } = validateData.data;
        const existingUser = await getUserByEmail(email as string);
        if (!existingUser) {
          return null;
        }

        const isPasswordCorrect = await bcrypt.compare(
          password,
          existingUser.password as string
        );
        if (!isPasswordCorrect) return null;
        return existingUser;
      },
    }),
  ],
} satisfies NextAuthConfig;

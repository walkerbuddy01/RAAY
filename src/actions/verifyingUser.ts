"use server";

import { getVerificationTokenByToken } from "@/data/token";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export const verifyingUser = async (token: string, email: string) => {
  if (!token) {
    return { error: "Token is missing!" };
  }
  if (!email) {
    return { error: "Email is missing!" };
  }

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "User with provided email is not found!" };
  }
  const verificationToken = await getVerificationTokenByToken(token);

  if (!verificationToken) {
    return { error: "Token not found!" };
  }

  const hasExpired = new Date(verificationToken?.expire!) < new Date();
  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  if (verificationToken.email !== existingUser.email) {
    return { error: `This token is not assigned to used email` };
  }

  await db.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      emailVerified: true,
    },
  });

  return { success: "Email verified" };
};

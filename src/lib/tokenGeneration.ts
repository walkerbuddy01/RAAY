import { getVerificationTokenByEmail } from "@/data/token";
import { getUserByEmail } from "@/data/user";
import { v4 as uuid } from "uuid";
import { db } from "./db";

export const generateVerificationToken = async (email: string) => {
  const token = uuid();
  const expire = new Date(new Date().getTime() + 3600 * 1000);
  const existingUser = await getUserByEmail(email);

  if (!existingUser || existingUser.emailVerified) {
    return null;
  }

  const existingToken = await getVerificationTokenByEmail(email);

  try {
    if (existingToken) {
      await db.verificationToken.delete({
        where: {
          id: existingToken.id,
        },
      });
    }

    const newVerificationToken = await db.verificationToken.create({
      data: {
        token,
        email,
        expire,
      },
    });

    return newVerificationToken;
  } catch {
    return null;
  }
};

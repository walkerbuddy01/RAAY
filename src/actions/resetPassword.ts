"use server";

import * as bcrypt from "bcryptjs";

import { getForgotPasswordTokenByToken } from "@/data/token";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export const resetPassword = async (
  email: string,
  token: string,
  password: string
) => {
  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "User does not exist!" };
  }
  const existingToken = await getForgotPasswordTokenByToken(token);

  if (!existingToken) {
    return { error: "Token does not exist!" };
  }

  const hasExpired = new Date(existingToken.expire) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  if (existingToken.email !== email) {
    return { error: "Email changed!" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const passwordUpdation = await db.user.update({
      where: {
        email: existingToken.email,
      },
      data: {
        password: hashedPassword,
      },
    });
    if (!passwordUpdation) {
      return { error: "Password updation failed! try again" };
    }
    await db.forgetPasswordToken.delete({
      where: {
        id: existingToken.id,
      },
    });
    
    return { success: "Password updated" };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};

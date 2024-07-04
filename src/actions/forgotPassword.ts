"use server";
import { getForgotPasswordTokenByEmail } from "@/data/token";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { sendForgotPasswordEmail } from "@/lib/sendMail";
import { generateForgotPasswordToken } from "@/lib/tokenGeneration";
import { forgotPasswordEmailZodSchema } from "@/zodSchema";
import * as z from "zod";

export const forgotPassword = async (
  value: z.infer<typeof forgotPasswordEmailZodSchema>
) => {
  const validateData = forgotPasswordEmailZodSchema.safeParse(value);
  if (!validateData.success) {
    return { error: "Wrong Format!" };
  }

  const { email } = validateData.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "User does not exist!" };
  }

  if (existingUser && !existingUser.emailVerified) {
    return { error: "verify your account first!" };
  }

  const existingToken = await getForgotPasswordTokenByEmail(email);

  if (existingToken) {
    await db.forgetPasswordToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const forgotPasswordToken = await generateForgotPasswordToken(email);

  if (!forgotPasswordToken) {
    return { error: "failed to generate token! try again" };
  }

  try {
    await sendForgotPasswordEmail(email, forgotPasswordToken.token);
    return { success: "password reset email sent!" };
  } catch {
    return { error: "Something went  wrong" };
  }
};

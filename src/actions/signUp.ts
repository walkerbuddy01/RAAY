"use server";
import * as z from "zod";
import { signUpZodSchema } from "@/zodSchema";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import * as bcrypt from "bcryptjs";
import { generateVerificationToken } from "@/lib/tokenGeneration";
import { sendEmailVerificationToken } from "@/lib/sendMail";

export const signUp = async (values: z.infer<typeof signUpZodSchema>) => {
  const validateData = signUpZodSchema.safeParse(values);

  if (!validateData.success) {
    return { error: "Wrong credential format!" };
  }

  const existingUser = await getUserByEmail(validateData?.data.email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }
  const { name, email, password } = validateData.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    return { error: "Something went wrong" };
  }
  //TODO: add verification and email sending
  const verificationToken = await generateVerificationToken(email);

  if (!verificationToken) {
    return { error: "Internal Error Retry !" };
  }

  await sendEmailVerificationToken(email, verificationToken.token);
  return { success: "Confirmation email sent!" };
};

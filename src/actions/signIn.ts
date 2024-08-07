"use server";
import { getUserByEmail } from "@/data/user";
import { signInZodSchema } from "@/zodSchema";
import { signIn as authSignIn } from "@/auth";
import * as z from "zod";
import * as bcrypt from "bcryptjs";
import { redirectAfterAuthRoute } from "../../routes";
import { AuthError } from "next-auth";

export const signIn = async (values: z.infer<typeof signInZodSchema>) => {
  try {
    const validateData = signInZodSchema.safeParse(values);

    if (!validateData.success) {
      return { error: "Wrong Format" };
    }

    const existingUser = await getUserByEmail(validateData.data.email);

    if (!existingUser) {
      return { error: "User does not exist!" };
    }
    if (!existingUser.emailVerified) {
      return { error: "Email is not verified!" };
    }
    const validatePassword = await bcrypt.compare(
      validateData?.data.password,
      existingUser.password as string
    );

    if (!validatePassword) {
      return { error: "Wrong password!" };
    }
    const { email, password } = validateData.data;

    await authSignIn("credentials", {
      email,
      password,
      redirectTo: redirectAfterAuthRoute,
    }); 
    return { success: "Sign In Done" };
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Wrong Credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};

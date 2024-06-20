import * as z from "zod";

export const signUpZodSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required!",
  }),
  email: z.string().email({
    message: "Email is required!",
  }),
  password: z.string().min(6, {
    message: "Password is required!",
  }),
});

export const signInZodSchema = z.object({
  email: z.string().email({
    message: "Email is required!",
  }),
  password: z.string({
    message: "Password is required",
  }),
});

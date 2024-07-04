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

export const forgotPasswordEmailZodSchema = z.object({
  email: z.string().email({
    message: "Email is required!",
  }),
});

export const resetPasswordZodSchema = z.object({
  password: z.string().min(6, {
    message: "Password is required",
  }),
});

export const createFeederZodSchema = z.object({
  label: z.string().min(3, {
    message: "label is required!",
  }),
  context: z.string().min(4, {
    message: " Length is too short!",
  }),
  //TODO: create the validation for image
  takingFeedback: z.boolean(),
});

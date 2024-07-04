"use server";

import { getUserByEmail } from "@/data/user";
import { currentUser } from "@/lib/currentUser";
import { db } from "@/lib/db";
import { createFeederZodSchema } from "@/zodSchema";
import { v4 as uuid } from "uuid";
import * as z from "zod";

export const createFeeder = async (
  values: z.infer<typeof createFeederZodSchema>
) => {
  const validateData = createFeederZodSchema.safeParse(values);
  if (!validateData.success) {
    return { error: "Invaild format!" };
  }

  const user = await currentUser();
  const existingUser = await getUserByEmail(user?.email as string);
  const { label, context, takingFeedback } = validateData.data;

  const contextLength = context.split(" ").length;
  if (contextLength < 3) {
    return { error: "context is too short" };
  }

  try {
    const inviteCode = uuid();
    const createdFeeder = await db.feeder.create({
      data: {
        label,
        context,
        takingFeedback,
        userId: existingUser?.id as string,
        inviteCode,
      },
    });

    return { success: "Created successfully!", id: createdFeeder.id };
  } catch (error) {
    console.log(error);

    return { error: "Something went wrong!" };
  }
};

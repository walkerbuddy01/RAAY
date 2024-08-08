"use server";

import { getFeederById } from "@/data/feeder";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const toggleTakingFeedback = async (id: string, userId: string) => {
  const existingFeed = await getFeederById(id);
  if (existingFeed?.userId !== userId) {
    return null;
  }
  try {
    const updatedFeeder = await db.feeder.update({
      where: {
        id,
      },
      data: {
        takingFeedback: !existingFeed?.takingFeedback,
      },
    });

    revalidatePath(`/d/feeder`);

    return updatedFeeder?.takingFeedback;
  } catch (error) {
    return null;
  }
};

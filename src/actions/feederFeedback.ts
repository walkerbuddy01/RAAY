"use server";

import { db } from "@/lib/db";
import { feederFeedback } from "@/zodSchema";
import * as z from "zod";

interface sendFeedbackProps {
  value: z.infer<typeof feederFeedback>;
  feederId: string;
}

export  const sendFeedback = async ({ value, feederId }: sendFeedbackProps) => {
  const validatingData = feederFeedback.safeParse(value);

  if (!validatingData.success) {
    return { error: "Feddback is too short!" };
  }

  try {
    const newFeedback = await db.feedback.create({
      data: {
        message: value.message,
        feederId,
      },
    });

    return { success: "Feedback sent!" };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

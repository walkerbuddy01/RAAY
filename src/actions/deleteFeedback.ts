"use server";

import { currentUser } from "@/lib/currentUser";
import { db } from "@/lib/db";

interface DeleteFeedbackProps {
  feederId: string;
  feedbackId: string;
}

export const deleteFeedback = async ({
  feederId,
  feedbackId,
}: DeleteFeedbackProps) => {
  if (!feedbackId) {
    return { error: "feedback Id not found" };
  }

  const isUserLoggedIn = await currentUser();
  if (!isUserLoggedIn) {
    return {
      error: "Unauthorized Access!",
    };
  }

  const validateFeedback = await db.feedback.findUnique({
    where: {
      id: feedbackId,
      feederId,
    },
  });

  if (!validateFeedback) {
    return {
      error: "Wrong feedback!",
    };
  }
  const validateUser = db.feeder.findUnique({
    where: {
      id: feederId,
      userId: isUserLoggedIn?.id,
    },
  });

  if (!validateUser) {
    return {
      error: "Unauthorized Access!",
    };
  }

  try {
    await db.feedback.delete({
      where: {
        id: feedbackId,
        feederId,
      },
    });
    return { success: "Feedback Deleted!" };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

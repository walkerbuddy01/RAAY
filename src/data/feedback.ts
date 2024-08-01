"use server";

import { currentUser } from "@/lib/currentUser";
import { db } from "@/lib/db";

export const getFeedbackById = async (feedbackId: string) => {
  if (!feedbackId) {
    return null;
  }

  const isUserLoggedIn = await currentUser();
  if (!isUserLoggedIn) {
    return undefined;
  }

  try {
    const feedback = await db.feedback.findUnique({
      where: {
        id: feedbackId,
      },
    });

    return feedback;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getFeedbacksByFeederId = async (feederId: string) => {
  if (!feederId) {
    return null;
  }

  const isUserLoggedIn = await currentUser();
  if (!isUserLoggedIn) {
    return undefined;
  }

  try {
    const Feedbacks = await db.feedback.findMany({
      where: {
        feederId,
      },
    });

    
    return Feedbacks;
  } catch (error) {
    console.log(error);
    return null;
  }
};

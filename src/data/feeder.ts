"use server";

import { db } from "@/lib/db";

export const getFeedersByUserId = async (userId: string) => {
  try {
    const existingFeeders = await db.feeder.findMany({
      where: {
        userId,
      },
    });

    return existingFeeders;
  } catch (error) {
    return null;
  }
};

export const getFeederById = async (id: string) => {
  try {
    const existingFeeder = await db.feeder.findUnique({
      where: {
        id,
      },
    });
    return existingFeeder;
  } catch (error) {
    return null;
  }
};

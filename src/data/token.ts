"use server";

import { db } from "@/lib/db";

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const existingToken = await db.verificationToken.findFirst({
      where: {
        email,
      },
    });
    return existingToken;
  } catch {
    return null;
  }
};

export const getVerificationTokenById = async (id: string) => {
  try {
    const existingToken = await db.verificationToken.findUnique({
      where: {
        id,
      },
    });
    return existingToken;
  } catch {
    return null;
  }
};

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const existingToken = await db.verificationToken.findUnique({
      where: {
        token,
      },
    });
    return existingToken;
  } catch {
    return null;
  }
};

export const getForgotPasswordTokenByEmail = async (email: string) => {
  try {
    const existingToken = await db.forgetPasswordToken.findFirst({
      where: {
        email,
      },
    });
    return existingToken;
  } catch {
    return null;
  }
};

export const getForgotPasswordTokenByToken = async (token: string) => {
  try {
    const existingToken = await db.forgetPasswordToken.findUnique({
      where: {
        token,
      },
    });

    return existingToken;
  } catch (error) {
    return null;
  }
};

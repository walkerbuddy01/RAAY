/*
  Warnings:

  - Added the required column `inviteCode` to the `Feeder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feeder" ADD COLUMN     "inviteCode" TEXT NOT NULL;

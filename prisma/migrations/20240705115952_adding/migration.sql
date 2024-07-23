/*
  Warnings:

  - A unique constraint covering the columns `[inviteCode]` on the table `Feeder` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Feeder_inviteCode_key" ON "Feeder"("inviteCode");

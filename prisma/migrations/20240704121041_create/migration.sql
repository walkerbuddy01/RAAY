/*
  Warnings:

  - A unique constraint covering the columns `[id,userId]` on the table `Feeder` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Feeder_id_userId_key" ON "Feeder"("id", "userId");

-- CreateTable
CREATE TABLE "VerificationToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "expire" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ForgetPasswordToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "expire" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ForgetPasswordToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_id_key" ON "VerificationToken"("id");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_email_key" ON "VerificationToken"("token", "email");

-- CreateIndex
CREATE UNIQUE INDEX "ForgetPasswordToken_id_key" ON "ForgetPasswordToken"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ForgetPasswordToken_token_key" ON "ForgetPasswordToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "ForgetPasswordToken_token_email_key" ON "ForgetPasswordToken"("token", "email");

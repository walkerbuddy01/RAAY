"use client";

import { useSearchParams } from "next/navigation";
import { AuthCardWrapper } from "../AuthCardWrapper";
import { useCallback, useEffect, useState, useTransition } from "react";
import { verifyingUser } from "@/actions/verifyingUser";
import { BeatLoader } from "react-spinners";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

function EmailVerificationForm() {
  const [pending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const verifyingToken = useCallback(async () => {
    if (!token) {
      return setError("Token is missing!");
    }
    if (!email) {
      return setError("Email is missing!");
    }
    startTransition(() => {
      verifyingUser(token, email).then((data) => {
        setSuccess(data?.success);
        setError(data?.error);
      });
    });
  }, [token, email]);

  useEffect(() => {
    setError("");
    setSuccess("");
    verifyingToken();
  }, [verifyingToken]);

  return (
    <AuthCardWrapper
      description="Email Verification"
      BackButtonHref="/auth/sign-in"
      BackButtonTitle="Back to signIn"
    >
      {pending && <BeatLoader color={"#7b7b7b"} className="text-center" />}
      <SuccessMessage message={success} />
      <ErrorMessage message={error} />
    </AuthCardWrapper>
  );
}

export default EmailVerificationForm;

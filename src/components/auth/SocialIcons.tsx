"use client";

import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { redirectAfterAuthRoute } from "../../../routes";

type loadingProvider = "google" | "github" | null;

function SocialIcons() {
  const [loadingProvider, setLoadingProvider] = useState<loadingProvider>(null);

  const AuthenticationByProviders = async (provider: "google" | "github") => {
    setLoadingProvider(provider);
    await signIn(provider, {
      callbackUrl: redirectAfterAuthRoute,
    });
    setLoadingProvider(null);
  };
  return (
    <div className="w-full flex justify-center gap-3">
      <Button
        className="w-full "
        onClick={() => {
          AuthenticationByProviders("google");
        }}
      >
        {loadingProvider !== "google" ? (
          <FcGoogle className="h-5 w-5" />
        ) : (
          <Lock className="h-7 w-7 stroke-orange-600 stroke-[2.25px] animate-bounce" />
        )}
      </Button>
      <Button
        className="w-full"
        onClick={() => {
          AuthenticationByProviders("github");
        }}
      >
        {loadingProvider !== "github" ? (
          <FaGithub className="h-5 w-5" />
        ) : (
          <Lock className="h-7 w-7 stroke-purple-800 stroke-[2.25px] animate-bounce" />
        )}
      </Button>
    </div>
  );
}

export default SocialIcons;

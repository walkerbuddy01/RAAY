"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { redirectAfterAuthRoute } from "../../../routes";

function SocialIcons() {
  const AuthenticationByProviders = async (provider: "google" | "github") => {
    console.log(provider);

    await signIn(provider, {
      callbackUrl: redirectAfterAuthRoute,
    });
  };
  return (
    <div className="w-full flex justify-center gap-3">
      <Button
        className="w-full "
        onClick={() => {
          AuthenticationByProviders("google");
        }}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        className="w-full"
        onClick={() => {
          AuthenticationByProviders("github");
        }}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
}

export default SocialIcons;

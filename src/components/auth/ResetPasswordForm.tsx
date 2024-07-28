"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordZodSchema } from "@/zodSchema";
import { useForm } from "react-hook-form";
import { AuthCardWrapper } from "../AuthCardWrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import * as z from "zod";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { resetPassword } from "@/actions/resetPassword";
import { useSearchParams } from "next/navigation";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import { getForgotPasswordTokenByToken } from "@/data/token";
import { useRouter } from "next/navigation";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const token = searchParam.get("token");
  const email = searchParam.get("email");
  const [pending, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  useEffect(() => {
    if (!token) {
      setError("Token not found!");
      return;
    }

    if (!email) {
      setError("email not found!");
      return;
    }
    const checkTokenExpireTime = async () => {
      const existingToken = await getForgotPasswordTokenByToken(token);
      if (!existingToken) {
        setError("Token does not exist!");
        return;
      }
      const hasExpired = new Date(existingToken.expire) < new Date();
      if (hasExpired) {
        setError("Token has Expired!");
        return;
      }
    };

    setError("");
    setSuccess("");
    checkTokenExpireTime();
  }, [token, email]);

  const form = useForm<z.infer<typeof resetPasswordZodSchema>>({
    resolver: zodResolver(resetPasswordZodSchema),
    defaultValues: {
      password: "",
    },
  });

  const handleResetPassword = (
    value: z.infer<typeof resetPasswordZodSchema>
  ) => {
    setSuccess("");
    setError("");
    if (!value) {
      return setError("Wrong format!");
    }

    startTransition(() => {
      // @ts-ignore
      resetPassword(email, token, value.password)
        .then((data) => {
          if (!data) {
            return setError("Something went wrong");
          }
          setError(data?.error);
          setSuccess(data?.success);
          if (data.success) {
            return router.push("/auth/sign-in");
          }
        })
        .finally(() => {
          form.reset();
        });
    });
  };
  return (
    <AuthCardWrapper
      description="Reset your password"
      BackButtonTitle="Back to sign in"
      BackButtonHref="/auth/sign-in"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleResetPassword)}>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder={showPassword ? "123456" : "******"}
                      {...field}
                      className="placeholder:text-base placeholder:text-slate-300/50"
                      type={showPassword ? "text" : "password"}
                      disabled={pending}
                    />
                    <div className="absolute top-2 right-3 select-none cursor-pointer">
                      {showPassword ? (
                        <Eye
                          className="h-5 w-5"
                          onClick={() => setShowPassword(false)}
                        />
                      ) : (
                        <EyeOff
                          onClick={() => setShowPassword(true)}
                          className="h-5 w-5"
                        />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <SuccessMessage message={success} />
          <ErrorMessage message={error} />
          <div className="w-full pt-1">
            <Button type="submit" className="w-full" disabled={pending}>
              {pending ? (
                <Loader2 className="animate-spin h-5 w-5 " />
              ) : (
                "Send email"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </AuthCardWrapper>
  );
}

export default ResetPasswordForm;

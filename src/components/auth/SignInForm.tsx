"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInZodSchema, signUpZodSchema } from "@/zodSchema";
import * as z from "zod";

import { CardWrapper } from "@/components/CardWrapper";
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
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import { signIn } from "@/actions/signIn";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

function SignInForm() {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const form = useForm<z.infer<typeof signInZodSchema>>({
    resolver: zodResolver(signInZodSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = (values: z.infer<typeof signInZodSchema>) => {
    setSuccess("");
    setError("");
    if (!values) {
      return setError("Wrong format!");
    }

    startTransition(() => {
      signIn(values)
        .then((data) => {
          if (!data) {
            return setError("Something went wrong");
          }
          setError(data?.error);
          setSuccess(data?.success);
        })
        .finally(() => {
          form.reset();
        });
    });
  };
  return (
    <CardWrapper
      description="Welcome Back"
      BackButtonHref="/auth/sign-up"
      BackButtonTitle="Not have ? Create new!"
      showSocial
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSignIn)}
          className="space-y-2 mb-3"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="walkerbuddy@example.com"
                    {...field}
                    className="placeholder:text-base placeholder:text-slate-300/50"
                    disabled={pending}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder={seePassword ? "123456" : "******"}
                      {...field}
                      className="placeholder:text-base placeholder:text-slate-300/50"
                      type={seePassword ? "text" : "password"}
                      disabled={pending}
                    />
                    <div className="absolute top-2 right-3 select-none cursor-pointer">
                      {seePassword ? (
                        <Eye
                          className="h-5 w-5"
                          onClick={() => setSeePassword(false)}
                        />
                      ) : (
                        <EyeOff
                          onClick={() => setSeePassword(true)}
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
          <div className="w-full text-sm py-1 px-1 select-none">
            <Link href={""}> Forgot password?</Link>
          </div>
          <SuccessMessage message={success} />
          <ErrorMessage message={error} />
          <div className="w-full select-none">
            <Button className="w-full" disabled={pending}>
              Sign In{" "}
              {pending && <Loader2 className="animate-spin h-4 w-4 ml-1" />}
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
}

export default SignInForm;

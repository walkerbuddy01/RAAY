"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpZodSchema } from "@/zodSchema";
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
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import { signUp } from "@/actions/signUp";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "@/components/auth/ErrorMessage";

function SignUpForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [pending, startTransition] = useTransition();
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const form = useForm<z.infer<typeof signUpZodSchema>>({
    resolver: zodResolver(signUpZodSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSignUp = (values: z.infer<typeof signUpZodSchema>) => {
    setSuccess("");
    setError("");
    if (!values) {
      return setError("Wrong format!");
    }

    startTransition(() => {
      signUp(values)
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
      description="Create new account"
      BackButtonHref="/auth/sign-in"
      BackButtonTitle="Already have account!"
      showSocial
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSignUp)}
          className="space-y-2 mb-3"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Karan Sharma"
                    className="placeholder:text-base 
                   placeholder:text-slate-500/50
                   dark:placeholder:text-slate-300/50"
                    {...field}
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="walkerbuddy@example.com"
                    {...field}
                    className="placeholder:text-base 
                    placeholder:text-slate-500/50
                    dark:placeholder:text-slate-300/50"
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
                      className="placeholder:text-base 
                      placeholder:text-slate-500/50
                      dark:placeholder:text-slate-300/50"
                      type={seePassword ? "text" : "password"}
                      disabled={pending}
                    />
                    <div className="absolute top-2 right-3 cursor-pointer">
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

          <SuccessMessage message={success} />
          <ErrorMessage message={error} />
          <div className="w-full pt-2">
            <Button
              className="w-full select-none"
              type="submit"
              disabled={pending}
            >
              Sign Up
              {pending && <Loader2 className="animate-spin h-4 w-4 ml-1 " />}
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
}

export default SignUpForm;

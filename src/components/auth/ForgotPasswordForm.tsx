"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordEmailZodSchema } from "@/zodSchema";

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
import { useState, useTransition } from "react";
import { forgotPassword } from "@/actions/forgotPassword";
import { Loader2 } from "lucide-react";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

function ForgotPasswordForm() {
  const [pending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof forgotPasswordEmailZodSchema>>({
    resolver: zodResolver(forgotPasswordEmailZodSchema),
    defaultValues: {
      email: "",
    },
  });

  const submitHandler = (
    value: z.infer<typeof forgotPasswordEmailZodSchema>
  ) => {
    startTransition(() => {
      forgotPassword(value).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <AuthCardWrapper
      description="Forgot Password"
      BackButtonTitle="Back to Login"
      BackButtonHref="/auth/sign-in"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)}>
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

export default ForgotPasswordForm;

"use client";

import { sendFeedback } from "@/actions/feederFeedback";

import { useState, useTransition } from "react";

import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { feederFeedback } from "@/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../auth/ErrorMessage";
import SuccessMessage from "../auth/SuccessMessage";

interface FeedbackTextareaProps {
  label: string | undefined;
  feederId: string;
}

export default function FeedbackTextarea({
  label = "",
  feederId,
}: FeedbackTextareaProps) {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [pending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof feederFeedback>>({
    resolver: zodResolver(feederFeedback),
    defaultValues: {
      message: "",
    },
  });

  const feedbackHandler = async (value: z.infer<typeof feederFeedback>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      sendFeedback({ value, feederId }).then((data) => {
        setError(data.error);
        setSuccess(data.success);

        if (data.success) {
          form.reset();
        }
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(feedbackHandler)}>
        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm py-1 px-2 mb-1 font-bold ">
                Share your anonymous feedback regarding @{label}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your anonymous message here"
                  className="placeholder:text-base placeholder:text-slate-300/50 text-xl resize-none"
                  rows={5}
                  {...field}
                  disabled={pending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full  flex items-center justify-end py-2 px-4 gap-3 mt-4 rounded-lg border">
          <ErrorMessage message={error} />
          <SuccessMessage message={success} />
          <Button
            className="bg-zinc-700 text-white "
            type="submit"
            disabled={pending}
          >
            Send it
          </Button>
        </div>
      </form>
    </Form>
  );
}

{
  /* <Textarea
              placeholder="Write your anonymous message here"
              className="placeholder:text-base placeholder:text-slate-300/50 resize-none"
              rows={5}
            />
            <div className="w-full flex justify-end py-2 px-1">
              <Button className="bg-zinc-700 text-white">Send it</Button>
            </div> */
}

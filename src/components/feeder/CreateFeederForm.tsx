"use client";

import * as z from "zod";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createFeeder as feederCreation } from "../../actions/createFeeder";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import SuccessMessage from "../auth/SuccessMessage";
import ErrorMessage from "../auth/ErrorMessage";
import { createFeederZodSchema } from "../../zodSchema/index";

export default function CreateFeederForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(createFeederZodSchema),
    defaultValues: {
      label: "",
      context: "",
      takingFeedback: true,
    },
  });

  const createFeeder = async (
    values: z.infer<typeof createFeederZodSchema>
  ) => {
    startTransition(() => {
      feederCreation(values).then((data: any) => {
        setError(data.error);
        if (data?.id) {
          setSuccess(data.success);
          router.push(`/d/feeder/${data?.id}`);
        }
      });
    });
  };
  return (
    <div className="w-full h-full  bg-[#2B2D31] p-4 rounded-r-lg flex justify-center">
      <Form {...form}>
        <form
          className="space-y-4 bg-[#313338] p-4 rounded-lg w-[500px]"
          onSubmit={form.handleSubmit(createFeeder)}
        >
          <FormField
            name="label"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg ">Label</FormLabel>
                <FormControl>
                  <Input
                    placeholder="RAAY as anonymous feedback service"
                    className="placeholder:text-zinc-500/50 bg-zinc-800"
                    {...field}
                    disabled={pending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="context"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Context</FormLabel>
                <FormControl>
                  <Textarea
                    rows={6}
                    placeholder="Tell us a little bit about your product"
                    className="resize-none placeholder:text-zinc-500/50 bg-zinc-800 "
                    {...field}
                    disabled={pending}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* 
<TODO: Add image uploading here />
*/}
          <FormField
            control={form.control}
            name="takingFeedback"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel>Want to get feedback</FormLabel>
                  <FormDescription>
                    When you share your feed links in known groups, you&apos;ll
                    receive feedback
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className=""
                    disabled={pending}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <SuccessMessage message={success} />
          <ErrorMessage message={error} />
          <div className="w-full flex justify-end">
            <Button type="submit" disabled={pending}>
              Create Feeder
              {pending && <Loader2 className="animate-spin w-5 h-5 ml-2 " />}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

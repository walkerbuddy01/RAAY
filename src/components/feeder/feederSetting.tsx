"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CircleCheck, CircleX, Copy, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { toggleTakingFeedback } from "@/actions/toggleTakingFeedback";

interface FeederSettingProps {
  id: string;
  userId: string;
  shareableLink: string;
  takingFeedback: boolean;
}

export function FeederSetting({
  id,
  userId,
  shareableLink,
  takingFeedback,
}: FeederSettingProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [isTakingFeedback, setIsTakingFeedback] = useState<boolean | null>(
    takingFeedback
  );
  const [pending, startTransition] = useTransition();

  const copyLinkToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareableLink);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleReceivingStatus = () => {
    startTransition(() => {
      toggleTakingFeedback(id, userId).then((data) => {
        console.log(data);

        setIsTakingFeedback(data);
      });
    });
  };

  return (
    <Card className="sm:w-[380px] h-2/5 sm:h-full ">
      <CardHeader>
        <CardTitle className="text-xl border-b px-1 py-1">
          Feeder Settings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <p className="text-sm">Shareable link</p>
          <div className="flex gap-2 py-2 mb-2">
            <Input
              className="focus-visible:ring-0 bg-zinc-900"
              readOnly={true}
              value={shareableLink}
            />
            <Button
              size={"icon"}
              className="bg-black border px-2"
              onClick={copyLinkToClipboard}
            >
              {isCopied ? (
                <Check className="text-white w-3 h-3" />
              ) : (
                <Copy className="text-white w-3 h-3" />
              )}
            </Button>
          </div>
          <div className="w-full space-y-2">
            <div className="flex gap-2">
              <p className="text-xl font-bold ">Recieving Status </p>
              {isTakingFeedback !== null ? (
                <Badge className="bg-zinc-950 rounded-full">
                  {isTakingFeedback ? (
                    <CircleCheck className="text-green-500 h-5 w-5" />
                  ) : (
                    <CircleX className="text-rose-500 h-5 w-5" />
                  )}
                </Badge>
              ) : (
                <Badge className="text-red-500 bg-black hover:bg-black rounded-full">
                  Activity Blocked
                </Badge>
              )}
            </div>

            <Button
              className={cn(
                "w-full",
                isTakingFeedback ? "bg-zinc-800 text-white" : ""
              )}
              onClick={toggleReceivingStatus}
              disabled={isTakingFeedback === null}
            >
              {isTakingFeedback
                ? "Not Receving Feedbacks"
                : "Receiving Feedbacks"}
              {pending && <Loader2 className="h-5 w-5 animate-spin ml-1" />}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

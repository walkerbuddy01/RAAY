"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Copy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FeederSettingProps {
  shareableLink: string;
}

export function FeederSetting({ shareableLink }: FeederSettingProps) {
  const [isCopied, setIsCopied] = useState(false);
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
          <div className="flex gap-2 py-2">
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
        </div>
      </CardContent>
    </Card>
  );
}

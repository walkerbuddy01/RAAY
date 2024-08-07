import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Disc3, Image as FeederImage } from "lucide-react";

import Link from "next/link";
import { ActionToolTip } from "./ActionTooltip";

import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface FeederCardWrapperProps {
  id: string;
  label: string;
  content: string;
  imageUrl?: string;
  takingFeedback: boolean;
  type: "feeder" | "feedback";
}

export function FeederCardWrapper({
  id,
  label,
  content,
  imageUrl,
  takingFeedback,
  type,
}: FeederCardWrapperProps) {

  return (
    <Link href={type === "feeder" ? `/feeder/${id}` : `/d/feedbacks/${id}`}>
      <Card className="sm:w-[250px] w-[220px] h-full cursor-pointer bg-gray-500 ">
        <CardHeader>
          <CardTitle className="text-center text-xl text-sky-500 flex justify-center items-center gap-2 border-b pb-1">
            Feeder <Disc3 className="h-5 w-5 animate-spin" />
            <ActionToolTip label="Status of working">
              <Badge className="bg-black rounded-full">
                <p
                  className={cn(
                    takingFeedback ? "text-emerald-500" : "text-rose-500"
                  )}
                >
                  {takingFeedback ? "Active" : "InActive"}
                </p>
              </Badge>
            </ActionToolTip>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          {imageUrl && (
            <div className="h-14 w-14 bg-zinc-800 animate-pulse rounded-lg flex justify-center items-center">
              <FeederImage className="h-6 w-6" />
            </div>
          )}
          <p className="text-left text-base font-bold underline text-orange-500">
            Label
          </p>
          <p className="text-left text-wrap text-white">
            {label.slice(0, 20)}
            {label.length > 19 ? "..." : ""}
          </p>
          <p className="text-left text-base font-bold underline text-orange-500">
            Context
          </p>
          <p className="text-left text-sm h-10 w-full text-white  text-balance overflow-hidden ">
            {content}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

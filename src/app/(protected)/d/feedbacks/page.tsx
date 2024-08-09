import { FeederCardWrapper } from "@/components/FeederCardWrapper";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { getFeedersByUserId } from "@/data/feeder";
import { currentUser } from "@/lib/currentUser";

export default async function Feedbacks() {
  const user = await currentUser();
  const feeders = await getFeedersByUserId(user?.id as string);

  return (
    <div className="h-full w-full bg-[#2B2D31] p-4 rounded-r-lg overflow-hidden ">
      <Card className="bg-[#37393c] border-0">
        <CardHeader>
          <CardTitle
            className="text-2xl text-center text-white
            "
          >
            Check your feedbacks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="whitespace-nowrap ">
            <div className="flex  h-full w-full gap-3  p-2 ">
              {feeders?.map((feeder) => (
                <FeederCardWrapper
                  key={feeder.id}
                  id={feeder.id}
                  label={feeder.label}
                  content={feeder.context}
                  takingFeedback={feeder.takingFeedback as boolean}
                  type="feedback"
                />
              ))}
            </div>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFeederById } from "@/data/feeder";
import { cn } from "@/lib/utils";
import { Copy, Image } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FeederSetting } from "@/components/feeder/feederSetting";

interface FeederProps {
  params: {
    feederId: string;
  };
}

async function Feeder({ params }: FeederProps) {
  const existingFeeder = await getFeederById(params.feederId);
  const shareableLink = `${process.env.WEBSITE_DOMAIN}/anonymousfeedback/${existingFeeder?.inviteCode}`;

  return (
    <div className="h-full w-full bg-zinc-800 rounded-r-lg p-4 flex flex-col sm:flex-row gap-4 justify-center">
      <Card className="sm:w-[380px] h-3/5 sm:h-full ">
        <CardHeader>
          <CardTitle className="text-xl border-b px-1 py-1">Feeder</CardTitle>
        </CardHeader>
        <CardContent className="h-full w-full">
          {existingFeeder?.imageUrl && (
            <div className="h-[30%] w-full bg-zinc-400 dark:bg-zinc-800 animate-pulse rounded-lg flex justify-center items-center gap-1 mb-4">
              <Image className="h-7 w-7 text-zinc-500" />
              <p className="text-zinc-500 font-bold">No Image</p>
            </div>
          )}

          <p className="text-left text-base font-bold underline text-orange-500">
            Label
          </p>
          <p className="text-left text-wrap">{existingFeeder?.label}</p>
          <p className="text-left text-base font-bold underline text-orange-500">
            Context
          </p>
          <p
            className={cn(
              "text-left text-sm  sm:h-[30%] h-[20%]  w-full overflow-auto p-1  text-balance",
              !existingFeeder?.imageUrl && "h-[60%]"
            )}
          >
            {existingFeeder?.context}
          </p>
        </CardContent>
      </Card>
      <FeederSetting shareableLink={shareableLink} />
    </div>
  );
}

export default Feeder;

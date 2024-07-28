import FeedbackTextarea from "@/components/feeder/FeedbackTextarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFeederByInviteCode } from "@/data/feeder";
import { Disc3, Image } from "lucide-react";

interface AnonymousFeedbackProps {
  params: {
    inviteCode: string;
  };
}

export default async function AnonymousFeedback({
  params,
}: Readonly<AnonymousFeedbackProps>) {
  const existingFeeder = await getFeederByInviteCode(params.inviteCode);

  return (
    <div className="max-w-screen-lg  bg-slate-300 dark:bg-zinc-900 h-full text-black  m-auto p-1  ">
      <Card className="w-full h-full">
        <CardHeader>
          {" "}
          <CardTitle className="text-center text-xl text-sky-500 flex justify-center items-center gap-2 border-b pb-1">
            Feedback <Disc3 className="h-5 w-5 animate-spin" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Card className="w-full h-full cursor-pointer ">
              <CardContent className="flex flex-col gap-1 p-4">
                {existingFeeder?.imageUrl && (
                  <div className="h-14 w-14 bg-zinc-800 animate-pulse rounded-lg flex justify-center items-center">
                    <Image className="h-6 w-6" />
                  </div>
                )}
                <p className="text-left text-base font-bold underline text-orange-500">
                  Label
                </p>
                <p className="text-left text-wrap">{existingFeeder?.label}</p>
                <p className="text-left text-base font-bold underline text-orange-500">
                  Context
                </p>
                <p className="text-left text-sm w-full  text-balance overflow-hidden ">
                  {existingFeeder?.context}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-4">
            <FeedbackTextarea
              label={existingFeeder?.label}
              feederId={existingFeeder?.id as string}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

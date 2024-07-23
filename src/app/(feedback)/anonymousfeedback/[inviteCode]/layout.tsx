import { BackgroundBeams } from "@/components/ui/acertenity UI/background-beams";
import { getFeederByInviteCode } from "@/data/feeder";
import { MessageSquareOff, ServerCog } from "lucide-react";

export default async function FeedbackLayout({
  params,
  children,
}: Readonly<{ params: { inviteCode: string }; children: React.ReactNode }>) {
  const existingFeeder = await getFeederByInviteCode(params.inviteCode);

  if (!existingFeeder) {
    return (
      <div className="h-full w-full bg-zinc-900 flex justify-center items-center gap-2">
        <p className="text-xl font-bold text-zinc-700">Something Went Wrong</p>
        <ServerCog className="h-10 w-10 text-red-500  animate-pulse" />
      </div>
    );
  }

  return !existingFeeder?.takingFeedback ? (
    <div className="h-full w-full bg-zinc-900 flex justify-center items-center gap-2">
      <p className="text-xl font-bold text-zinc-700">Not Taking Feedback</p>
      <MessageSquareOff className="h-10 w-10 text-zinc-700" />
      <BackgroundBeams />
    </div>
  ) : (
    <div className=" w-full bg-slate-200 dark:bg-zinc-900 ">{children}</div>
  );
}

"use client";

import { Toaster, toast } from "sonner";

import { ActionToolTip } from "@/components/ActionTooltip";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MessageSquareOff, Trash2, XCircle } from "lucide-react";

import { deleteFeedback } from "@/actions/deleteFeedback";
import FeedbackSkeleton from "@/components/skeletons/FeedbackSkeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getFeedbacksByFeederId } from "@/data/feedback";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";

type Feedback = {
  id: string;
  message: string;
  feederId: string;
};

export default function FeederFeedbacks() {
  const params = useParams();
  const router = useRouter();

 

  const { data, fetchStatus, refetch } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const data: Feedback[] | null | undefined = await getFeedbacksByFeederId(
        params.feederId as string
      );
      return data;
    },
    initialData: null,
    refetchOnWindowFocus: true,
  });

  const { mutate } = useMutation({
    mutationFn: deleteFeedback,
    onSuccess: () => {
      toast.success("Feedback Deleted ⚡", {
        closeButton: true,
        icon: <CheckCircle className="h-4 w-4" />,
      });

      refetch();
    },
    onError: () => {
      toast.error("Deletion Failed", {
        closeButton: true,
        icon: <XCircle className="h-4 w-4" />,
      });
    },
  });

  if (data === undefined) {
    router.push("/auth/sign-in");
  }

  if (Array.isArray(data) && data.length < 1) {
    return (
      <div className="h-full w-full bg-zinc-900 flex justify-center items-center gap-2 rounded-lg">
        <p className="text-xl font-bold text-zinc-700">No Feedback received</p>
        <MessageSquareOff className="h-10 w-10 text-zinc-700" />
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-[#2B2D31] p-4 rounded-r-lg overflow-hidden ">
      <h1 className="text-2xl font-bold text-emerald-500">Feedbacks</h1>
      {fetchStatus !== "idle" ? (
        <div className="h-full w-full overflow-auto space-y-4 py-4">
          <FeedbackSkeleton />
          <FeedbackSkeleton />
          <FeedbackSkeleton />
          <FeedbackSkeleton />
          <FeedbackSkeleton />
          <FeedbackSkeleton />
          <FeedbackSkeleton />
          <FeedbackSkeleton />
        </div>
      ) : (
        <div className="h-full w-full overflow-auto space-y-2  py-4">
          {data?.map((feedback) => (
            <Card key={feedback?.id}>
              <CardContent className="p-3">
                <div className="flex ">
                  <div className=" w-[80%] text-left text-balance cursor-pointer">
                    <Dialog>
                      <DialogTrigger>
                        <ActionToolTip label="Click for more" align="start">
                          <div>
                            {feedback.message.slice(0, 120)}
                            {feedback.message.length > 80 ? "..." : ""}
                          </div>
                        </ActionToolTip>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            <p className="text-rose-500 text-xl">Feedback</p>
                          </DialogTitle>
                        </DialogHeader>
                        <p>{feedback.message}</p>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="w-[20%] flex justify-end">
                    <ActionToolTip label="Delete">
                      <Trash2
                        onClick={() => {
                          mutate({
                            feederId: feedback.feederId,
                            feedbackId: feedback.id,
                          });
                        }}
                      />
                    </ActionToolTip>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      <Toaster theme="system" richColors={true} position="bottom-right" />
    </div>
  );
}

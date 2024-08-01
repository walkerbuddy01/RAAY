"use client";

import { deleteFeedback } from "@/actions/deleteFeedback";
import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import { ActionToolTip } from "../ActionTooltip";

interface DeleteFeedbackProps {
  feederId: string;
  feedbackId: string;
}

export default function DeleteFeedback({
  feederId,
  feedbackId,
}: DeleteFeedbackProps) {
  const [pending, startTransition] = useTransition();
  const handleDelete = async () => {
    startTransition(() => {
      deleteFeedback({ feederId, feedbackId }).then((data) => {
        console.log(data);
      });
    });
  };

  return (
    <ActionToolTip label="Delete">
      <Trash2 onClick={handleDelete} />
    </ActionToolTip>
  );
}

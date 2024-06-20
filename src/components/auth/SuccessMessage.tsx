import { CircleCheck } from "lucide-react";

interface SuccessMessageProps {
  message?: string;
}

function SuccessMessage({ message }: SuccessMessageProps) {
  return (
    message && (
      <div className="bg-emerald-400/40 text-emerald-600 dark:text-green-300 font-medium text-sm p-3 rounded-md flex items-center ">
        {message} <CircleCheck className="h-4 w-4 ml-1" />
      </div>
    )
  );
}
400;

export default SuccessMessage;

import { Skeleton } from "../ui/skeleton";

export default function FeedbackSkeleton() {
  return (
    <Skeleton className="sm:h-[50px] h-[90px] rounded-xl bg-[#232326] py-1 px-4 flex items-center justify-between">
      <Skeleton className="h-5 w-[80%] rounded-md bg-[#333334]" />
      <Skeleton className="h-6 w-10 bg-[#333334]" />
    </Skeleton>
  );
}


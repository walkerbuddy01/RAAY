import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function FeederSkeleton() {
  return (
    <Card className="sm:min-w-[250px] min-w-[220px]  h-full max-h-[220px] col-span-1 cursor-pointer bg-black/20 rounded-2xl grid grid-rows-3 gap-3 p-3 ">
      <Skeleton className="row-span-1 bg-white/5 rounded-xl" />
      <Skeleton className="row-span-2 bg-white/5 rounded-xl" />
    </Card>
  );
}

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="h-full w-full bg-zinc-800 rounded-lg p-4 flex flex-col sm:flex-row gap-4 justify-center">
      <Card
        className="sm:w-[380px] h-3/5 sm:h-full flex flex-col gap-3 p-3"
        aria-hidden={true}
      >
        <p className="text-xl border-b px-1 py-1.5 font-bold">Feeder</p>
        <div>
          <Skeleton className=" h-5 w-28 rounded-xl bg-[#3b3b3d]" />
        </div>
        <Skeleton className="sm:h-10 h-8 w-full bg-[#4c4c4f]" />
        <div>
          <Skeleton className=" h-6 w-32 rounded-xl bg-[#3b3b3d]" />
        </div>
        <Skeleton className="h-40 w-full bg-[#4c4c4f]" />
      </Card>
      <Card
        className="sm:w-[380px] h-3/5 sm:h-full flex flex-col gap-3 p-3"
        aria-hidden={true}
      >
        <p className="text-xl border-b px-2 py-1.5 font-bold">
          {" "}
          Feeder Settings{" "}
        </p>

        <div>
          <Skeleton className=" h-4 w-28 rounded-xl bg-[#3b3b3d]" />
        </div>

        <div className="flex gap-2">
          <Skeleton className=" h-9 w-full bg-[#4c4c4f] flex-1" />
          <Skeleton className="h-9 w-9 bg-[#4c4c4f]" />
        </div>

        <div>
          <Skeleton className=" h-6 w-48 rounded-xl bg-[#3b3b3d]" />
        </div>
        <Skeleton className=" h-10 w-full bg-[#4c4c4f] " />
      </Card>
    </div> 
  );
}

export default loading;

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div
      className="w-full h-full  bg-[#2B2D31] p-4 rounded-r-lg flex justify-center"
      aria-hidden={true}
    >
      <div className="space-y-4 bg-[#313338] p-4 rounded-lg w-[500px]">
        <div >
          <Skeleton className=" h-5 w-28 rounded-xl bg-[#3b3b3d]" />
        </div>
        <Skeleton className="sm:h-10 h-8 w-full bg-[#4c4c4f]" />
        <div >
          <Skeleton className=" h-6 w-32 rounded-xl bg-[#3b3b3d]" />
        </div>
        <Skeleton className="h-40 w-full bg-[#4c4c4f]" />
        <Skeleton className="h-24 w-full bg-[#3f3f41]" />

        <div className="w-full flex justify-end">
          <Button type="submit">Create Feeder</Button>
        </div>
      </div>
    </div>
  );
}

export default loading;

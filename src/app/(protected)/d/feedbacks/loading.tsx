import FeederSkeleton from "@/components/skeletons/FeederSkeleton";
import React from "react";

function loading() {
  return (
    <div className="h-full w-full bg-[#2B2D31] p-4 rounded-lg overflow-hidden ">
      <div className=" h-[60%] w-full py-2 px-3 rounded-xl mt-4 bg-[#37393c] ">
        <p className=" p-2 font-bold text-white text-2xl text-center  ">
          Check your feedbacks
        </p>
        <div className=" flex  gap-3 h-full w-full p-2 px-3 overflow-auto">
          <FeederSkeleton />
          <FeederSkeleton />
          <FeederSkeleton />
          <FeederSkeleton />
        </div>
      </div>
    </div>
  );
}

export default loading;

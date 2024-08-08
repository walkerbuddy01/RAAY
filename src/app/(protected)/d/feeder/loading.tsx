import AddFeeder from "@/components/feeder/AddFeeder";
import FeederSkeleton from "@/components/skeletons/FeederSkeleton";

function loading() {
  return (
    <div className="h-full w-full bg-[#2B2D31] p-4 rounded-lg overflow-hidden ">
      <AddFeeder />
      <div className=" h-[65%] w-full py-2 px-3 rounded-xl mt-4 bg-zinc-800 ">
        <p className="text-center text-4xl p-2 font-bold text-white ">
          All Feeders
        </p>
        <div className=" flex  gap-3 h-full w-full p-2 overflow-auto">
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

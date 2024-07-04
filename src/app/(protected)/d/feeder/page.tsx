import AddFeeder from "@/components/feeder/AddFeeder";
import AllFeeders from "@/components/feeder/AllFeeders";
import { getFeedersByUserId } from "@/data/feeder";
import { currentUser } from "@/lib/currentUser";

export default async function FeederPanel() {


  return (
    <div className="h-full w-full bg-[#2B2D31] p-4 rounded-r-lg overflow-hidden ">
      <AddFeeder />
      <AllFeeders />
    </div>
  );
}

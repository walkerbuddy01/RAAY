import { currentUser } from "@/lib/currentUser";
import { FeederCardWrapper } from "../FeederCardWrapper";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { getFeedersByUserId } from "@/data/feeder";

export interface feederType {
  id: string;
  label: string;
  context: string;
  imageUrl: string | null;
  userId: string;
  takingFeedback: string;
  createdAt: Date;
  updateAt: Date;
}

async function AllFeeders() {

  const user = await currentUser();
  const feeders = await getFeedersByUserId(user?.id as string);
  return (
    <div className=" h-[65%] w-full py-2 px-3 rounded-xl mt-4 bg-zinc-800 ">
      <p className="text-center text-4xl p-2 font-bold text-white ">
        All Feeders
      </p>
      <ScrollArea className="whitespace-nowrap ">
        <div className=" flex  w-full gap-3  p-2">
          {feeders?.map((feeder) => (
            <FeederCardWrapper
              key={feeder.id}
              id={feeder.id}
              label={feeder.label}
              content={feeder.context}
              takingFeedback={feeder.takingFeedback as boolean}
              type="feeder"
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default AllFeeders;

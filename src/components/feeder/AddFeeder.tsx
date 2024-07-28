"use client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

function AddFeeder() {
  const router = useRouter();
  return (
    <div className="h-48 w-full">
      <div className="h-full w-56 bg-zinc-800 rounded-lg p-3  space-y-2">
        <div className="h-[70%] w-full flex items-center justify-center border border-dashed border-zinc-600 rounded-lg flex-col gap-1">
          <Plus className="h-6 w-6 text-zinc-500 " />
          <p className="text-sm text-zinc-500">Add Feeder</p>
        </div>

        <Button
          onClick={() => router.push("/create-feeder")}
          className="w-full bg-blue-600 text-white hover:bg-blue-700"
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default AddFeeder;
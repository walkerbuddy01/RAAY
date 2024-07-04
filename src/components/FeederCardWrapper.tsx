import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Disc3, Image as FeederImage } from "lucide-react";

import Link from "next/link";

interface FeederCardWrapperProps {
  id: string;
  label: string;
  content: string;
  imageUrl?: string;
  children: React.ReactNode;
}

export function FeederCardWrapper({
  id,
  label,
  content,
  imageUrl,
}: FeederCardWrapperProps) {
  return (
    <Link href={`/feeder/${id}`}>
      <Card className="sm:w-[250px] w-[220px] h-full cursor-pointer ">
        <CardHeader>
          <CardTitle className="text-center text-xl text-sky-500 flex justify-center items-center gap-2 border-b pb-1">
            Feeder <Disc3 className="h-5 w-5 animate-spin" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          {imageUrl && (
            <div className="h-14 w-14 bg-zinc-800 animate-pulse rounded-lg flex justify-center items-center">
              <FeederImage className="h-6 w-6" />
            </div>
          )}
          <p className="text-left text-base font-bold underline text-orange-500">
            Label
          </p>
          <p className="text-left text-wrap">{label}</p>
          <p className="text-left text-base font-bold underline text-orange-500">
            Context
          </p>
          <p className="text-left text-sm h-10 w-full  text-balance overflow-hidden ">
            {content}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

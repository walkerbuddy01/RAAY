"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Cog, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function NavigationSideBar() {
  const router = useRouter();

  const location = window.location.pathname.split("/");
  const exactLocation = location.filter((path) => path !== "");

  const [pathname, setPathname] = useState<string>(
    `${exactLocation[1]}` || "feeder"
  );

  return (
    <div
      className={cn(
        "h-full w-48 py-3 px-2 bg-[#1E1F22] rounded-l-lg space-y-2 lg:block hidden"
      )}
    >
      <Button
        onClick={() => {
          setPathname("feeder");
          router.push("/d/feeder");
        }}
        className={cn(
          "w-full px-2 py-6  bg-transparent shadow-none  text-left group hover:bg-zinc-200 ",
          pathname === "feeder" && "bg-zinc-200"
        )}
      >
        <p
          className={cn(
            " text-[18px] font-semibold flex  items-center gap-2 text-left text-zinc-600  w-full group-hover:text-blue-500",
            pathname === "feeder" && "text-blue-500"
          )}
        >
          <FolderOpen className="h-6 w-6" />
          Feeders
        </p>
      </Button>
      <Button
        onClick={() => {
          setPathname("setting");
          router.push("/d/setting");
        }}
        className={cn(
          " w-full px-2 py-6  bg-transparent shadow-none  text-left group hover:bg-zinc-200",
          pathname === "setting" && "bg-zinc-200"
        )}
      >
        <p
          className={cn(
            " text-[18px] font-semibold flex  items-center gap-2 text-left text-zinc-600  w-full group-hover:text-blue-500",
            pathname === "setting" && "text-blue-500"
          )}
        >
          <Cog className="h-6 w-6" />
          Settings
        </p>
      </Button>
    </div>
  );
}

"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ActionAvatar from "../ActionAvatar";
import { ShowHoverDetails } from "../ShowHoverDetails";
import { ThemeToggler } from "../ThemeToggler";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { AlignRight } from "lucide-react";
import Link from "next/link";

function DashboardNavbar() {
  const user = useCurrentUser();
  const signOutCurrent = async () => {
    await signOut();
  };

  return (
    <nav className="w-full h-[10%] sm:h-[12%] px-3 py-3 sm:px-5 sm:py-4 flex items-center justify-between ">
      <div className="h-full flex justify-center items-center  bg-slate-500/40 dark:bg-slate-500/30 border border-gray-500/40 rounded-full ">
        <ShowHoverDetails
          title="@RAAY"
          description="Anonymous feedback platform"
          date="Built on 17 Jun 2024"
        >
          <p className="dark:text-white tracking-wide text-slate-200 font-semibold text-3xl px-2  ">
            RAAY
          </p>
        </ShowHoverDetails>
      </div>
      <div className="h-full hidden sm:flex items-center gap-2 py-1 px-2 bg-slate-500/40 dark:bg-slate-500/30 border border-gray-500/40 rounded-full">
        <ShowHoverDetails
          title={`@${user?.name}`}
          description={`${user?.email}`}
        >
          <p className="mr-3 text-lg">Welcome, {user?.name}</p>
          <ActionAvatar
            src={user?.image as string}
            name={user?.name as string}
          />
        </ShowHoverDetails>
      </div>

      <div className="h-full hidden sm:flex items-center gap-3">
        <Button variant={"destructive"} onClick={signOutCurrent}>
          Sign Out
        </Button>
        <ThemeToggler />
      </div>
      <div className="h-full flex sm:hidden items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant={"default"}
              size={"icon"}
              className="bg-[#2B2D31] text-white p-1"
            >
              <AlignRight />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <div className="flex items-center gap-3">
                {user?.name}
                <ActionAvatar
                  src={user?.image as string}
                  name={user?.name as string}
                  classname="h-8 w-8"
                />
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/d/feeder"}>Feeders</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Link href={"/d/setting"}>Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Link href={"/d/feedbacks"}>Feedbacks</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                variant={"destructive"}
                onClick={signOutCurrent}
                className="w-full"
              >
                Sign Out
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <ThemeToggler />
      </div>
    </nav>
  );
}

export default DashboardNavbar;

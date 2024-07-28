"use client";

import ActionAvatar from "../ActionAvatar";
import { ShowHoverDetails } from "../ShowHoverDetails";
import { ThemeToggler } from "../ThemeToggler";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
function DashboardNavbar() {
  const user = useCurrentUser();
  const signOutCurrent = async () => {
    await signOut();
  };

  return (
    <nav className="w-full h-[12%] px-5 py-4 flex items-center justify-between ">
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

      <div className="h-full hidden  sm:flex items-center gap-3">
        <Button variant={"destructive"} onClick={signOutCurrent}>
          Sign Out
        </Button>
        <ThemeToggler />
      </div>
    </nav>
  );
}

export default DashboardNavbar;
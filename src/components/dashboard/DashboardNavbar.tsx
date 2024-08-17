"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { AlignRight, Gem } from "lucide-react";
import { signOut } from "next-auth/react";
import ActionAvatar from "../ActionAvatar";
import { ShowHoverDetails } from "../ShowHoverDetails";
import { ThemeToggler } from "../ThemeToggler";
import { Button } from "../ui/button";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { NAV_PAGES, UPCOMING_FEATURES } from "@/lib/constants";

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
      <div
        className="h-full flex sm:hidden items-center gap-3"
        suppressHydrationWarning
      >
        <Drawer>
          <DrawerTrigger>
            <Button
              variant={"default"}
              size={"icon"}
              className="bg-[#2B2D31] text-white p-1"
            >
              <AlignRight />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[420px]">
            <MaxWidthWrapper className="px-6 flex flex-col gap-8">
              <div className="space-y-3">
                <p className="text-sm text-zinc-300">Manage</p>
                <div className="space-y-1 ">
                  {NAV_PAGES.map((item) => (
                    <Link
                      href={item.href}
                      key={item.title}
                      className="flex gap-3 items-center tracking-wide"
                    >
                      <item.icon className="h-4 w-4 text-zinc-500" />
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-zinc-300">Upcoming features</p>
                <div className="space-y-1 ">
                  {UPCOMING_FEATURES.map((item) => (
                    <p
                      key={item.title}
                      className="flex gap-3 items-center text-zinc-400 tracking-wide"
                    >
                      <item.icon className="h-4 w-4 text-zinc-500" />
                      {item.title}
                    </p>
                  ))}
                </div>
              </div>
              <Button
                className="w-full flex  items-center gap-2"
                variant={"outline"}
                disabled
              >
                Upgrade to Premium soon:{")"}
                <Gem className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-3">
                <ActionAvatar
                  src={user?.image as string}
                  name={user?.name as string}
                />
                <p className="mr-3"> {user?.name}</p>
              </div>
            </MaxWidthWrapper>
          </DrawerContent>
        </Drawer>

        <ThemeToggler />
      </div>
    </nav>
  );
}

export default DashboardNavbar;

{
  /* <DropdownMenu>
          <DropdownMenuTrigger>
            
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
        </DropdownMenu> */
}

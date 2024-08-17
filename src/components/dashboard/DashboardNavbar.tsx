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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { NAV_ITEMS } from "@/lib/constants";
import { AppWindow, MessageCircleMore } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button } from "../ui/button";
import ListItem from "../ui/listItem";
import { Badge } from "../ui/badge";

function DashboardNavbar() {
  const user = useCurrentUser();
  const signOutCurrent = async () => {
    await signOut();
  };

  return (
    <nav className="bg-[#17191B] w-full rounded-xl">
      <MaxWidthWrapper>
        <div className="h-[60px] flex items-center justify-between ">
          <div className="text-2xl font-bold flex items-center  gap-1">
            <MessageCircleMore className="h-8 w-8" />
            <p className="text-orange-500">Raay</p>
            <Badge
              variant={"outline"}
              className="ml-2 font-medium text-green-400 border-green-600 bg-green-100/10"
            >
              Early Access
            </Badge>
          </div>

          <div className="hidden sm:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem key={"home"}>
                  <Link href="/d/feeder" passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {NAV_ITEMS.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {item.items.map((price) => (
                          <ListItem
                            key={price.label}
                            title={price.label}
                            href={price.href}
                          >
                            {price.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem key={"setting"}>
                  <Link href="/d/setting" passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Setting
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="sm:block hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <AppWindow className="h-8 w-8 " />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <Button variant={"destructive"} onClick={signOutCurrent}>
                    Sign Out
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="block sm:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <AppWindow className="h-8 w-8" />
              </DrawerTrigger>
              <DrawerContent className="h-[500px]">
                <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>
                    This action cannot be undone.
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default DashboardNavbar;

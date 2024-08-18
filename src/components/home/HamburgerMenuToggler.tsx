import { Button, buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AlignRight, Fingerprint, ScanEye } from "lucide-react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";

function HamburgerMenuToggler() {
  return (
    <div className="h-full sm:hidden">
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="navtoggler">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={()=>router.push()}>Sign In</DropdownMenuItem>
          <DropdownMenuItem onClick={()=>router.push("/auth/sign-up")}>Sign Up</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
      <Drawer>
        <DrawerTrigger>
          <Button variant={"outline"} size={"icon"}>
            <AlignRight />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[220px]">
          <MaxWidthWrapper className="px-6 flex flex-col gap-2">
            <DrawerHeader className="text-xl font-bold ">
              Authentication
            </DrawerHeader>
              <div className="space-y-3 ">
                <Link
                  href={"/auth/sign-in"}
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                    }),
                    "flex text-base gap-3 items-center tracking-wide"
                  )}
                >
                  <Fingerprint className="h-6 w-6 text-zinc-500" />
                  Sign in
                </Link>
                <Link
                  href={"/auth/sign-up"}
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                    }),
                    "flex text-base gap-3 items-center tracking-wide"
                  )}
                >
                  <ScanEye className="h-6 w-6 text-zinc-500" />
                  Sign up
                </Link>
              </div>
          </MaxWidthWrapper>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default HamburgerMenuToggler;

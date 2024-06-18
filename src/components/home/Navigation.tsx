import React from "react";
import { ShowHoverDetails } from "@/components/ShowHoverDetails";
import { Button } from "@/components/ui/button";
import { ThemeToggler } from "@/components/ThemeToggler";
import HamburgerMenuToggler from "@/components/home/HamburgerMenuToggler";
import { useRouter } from "next/navigation";

function Navigation() {
  const router = useRouter();
  return (
    <div className="w-full h-22  py-4 px-2">
      <nav className="w-full h-full flex items-center justify-between py-2 px-5 bg-slate-500/40 dark:bg-slate-500/50 rounded-full">
        <ShowHoverDetails
          title="@RAAY"
          description="Anonymous feedback platform"
          date="Built on 17 Jun 2024"
        >
          <p className="dark:text-white tracking-wide text-slate-100 font-semibold text-3xl  ">
            RAAY
          </p>
        </ShowHoverDetails>
        <div className=" flex h-full items-center justify-end gap-4 w-1/2 ">
          <HamburgerMenuToggler />
          <Button
            variant={"navOutline"}
            size={"sm"}
            className="sm:block hidden"
            onClick={() => router.push("/auth/sign-up")}
          >
            Sign Up
          </Button>
          <Button 
          size={"sm"} 
          className="sm:block hidden" 
          variant={"outline"}
          onClick={()=>router.push("/auth/sign-in")}
          >
            Sign In
          </Button>
          <ThemeToggler />
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";

function HamburgerMenuToggler() {
  const router = useRouter();
  return (
    <div className="h-full sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="navtoggler">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={()=>router.push("/auth/sign-in")}>Sign In</DropdownMenuItem>
          <DropdownMenuItem onClick={()=>router.push("/auth/sign-up")}>Sign Up</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default HamburgerMenuToggler;

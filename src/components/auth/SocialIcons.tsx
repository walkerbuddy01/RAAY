import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

function SocialIcons() {
  return (
    <div className="w-full flex justify-center gap-3">
      <Button className="w-full">
        <FcGoogle className="h-4 w-4" />
      </Button>
      <Button className="w-full">
        <FaGithub className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default SocialIcons;

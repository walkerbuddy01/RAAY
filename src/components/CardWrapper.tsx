import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Shield } from "lucide-react";
import SocialIcons from "./auth/SocialIcons";
import Link from "next/link";

interface CardWrapperProps {
  children: React.ReactNode;
  description?: string;
  BackButtonTitle?: string;
  BackButtonHref?: string;
}

export function CardWrapper({
  children,
  description,
  BackButtonTitle,
  BackButtonHref,
}: CardWrapperProps) {
  return (
    <Card className="w-[350px] py-2 px-6">
      <CardHeader>
        <CardTitle className="text-center text-2xl text-green-500 flex justify-center items-center gap-2">
          Auth Active <Shield className="h-6 w-6" />
        </CardTitle>
        <CardDescription className="text-center ">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {children}
        <SocialIcons />
      </CardContent>
      <CardFooter className="flex justify-between bg-red-500">
        <Button variant={"link"} className="text-white">
          <Link href={BackButtonHref as string}>{BackButtonTitle}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

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
  showSocial?: boolean;
}

export function CardWrapper({
  children,
  description,
  BackButtonTitle,
  BackButtonHref,
  showSocial,
}: CardWrapperProps) {
  return (
    <Card className="w-[400px] py-2 px-2">
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
        {showSocial && <SocialIcons />}
      </CardContent>
      {BackButtonHref && (
        <CardFooter className="flex justify-center ">
          <Button
            variant={"link"}
            asChild
            className="text-sm text-slate-500 dark:text-slate-300/65 "
          >
            <Link href={BackButtonHref as string}>{BackButtonTitle}</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

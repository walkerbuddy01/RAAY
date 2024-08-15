import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function MaxWidthWrapper({
  children,
  className,
}: MaxWidthWrapperProps) {
  return (
    <div className={cn("mx-auto max-w-screen-xl w-full px-3 ", className)}>
      {children}
    </div>
  );
}

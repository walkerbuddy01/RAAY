import { CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface ShowHoverDetailsProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  date?: string;
}

export function ShowHoverDetails({
  children,
  title,
  description,
  date,
}: ShowHoverDetailsProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">{children}</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-50">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{title}</h4>
            {description && <p className="text-sm">{description}</p>}
            {date && (
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">{date}</span>
              </div>
            )}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

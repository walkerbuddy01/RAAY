import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ActionAvatarProps {
  src: string | undefined;
  name: string | undefined;
}

function ActionAvatar({ src, name }: ActionAvatarProps) {
  const label = name?.split(" ");
  const FirstName = label?.[0];

  const fallbackLabel = FirstName?.[0];

  return (
    <Avatar className="w-10 h-10">
      <AvatarImage src={src} />
      <AvatarFallback>{fallbackLabel}</AvatarFallback>
    </Avatar>
  );
}

export default ActionAvatar;

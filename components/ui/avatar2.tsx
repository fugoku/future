import { cn } from "@/lib/utils";
import Image from "next/image";

export function Avatar({
  user = {},
  className,
}: {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
  className?: string;
}) {
  if (!user) {
    return (
      <div
        className={cn(
          "h-10 w-10 animate-pulse rounded-full border border-gray-300 bg-gray-100",
          className,
        )}
      />
    );
  }

  return (
    <Image
      alt={`Avatar for ${user?.name || user?.email}`}
      src={
        user?.image ||
        `https://avatars.dicebear.com/api/micah/${user?.email}.svg`
      }
      width={10}
      height={10}
      className={cn("h-10 w-10 rounded-full border border-gray-300", className)}
    />
  );
}

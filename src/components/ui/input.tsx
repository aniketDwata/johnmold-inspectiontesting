import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      className={cn(
        "min-h-12 w-full rounded-md border border-[#cad7d0] bg-white px-4 text-base text-[#18201c] outline-none transition placeholder:text-[#607067] focus:border-[#17664a] focus:ring-2 focus:ring-[#17664a]/20",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: ComponentPropsWithoutRef<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full resize-y rounded-md border border-[#cad7d0] bg-white px-4 py-3 text-base text-[#18201c] outline-none transition placeholder:text-[#607067] focus:border-[#17664a] focus:ring-2 focus:ring-[#17664a]/20",
        className,
      )}
      {...props}
    />
  );
}

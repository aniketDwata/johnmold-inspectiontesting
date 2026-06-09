import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonStyles({ variant }), className)}
      {...props}
    />
  );
}

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function LinkButton({
  className,
  variant = "primary",
  ...props
}: LinkButtonProps) {
  return <Link className={cn(buttonStyles({ variant }), className)} {...props} />;
}

function buttonStyles({ variant }: { variant: ButtonProps["variant"] }) {
  return cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-[#17664a] focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
    variant === "primary" &&
      "bg-[#17664a] text-white hover:bg-[#114d38]",
    variant === "secondary" &&
      "border border-[#17664a]/25 bg-white text-[#17664a] hover:bg-[#eef7f2]",
    variant === "ghost" && "text-[#17664a] hover:bg-[#eef7f2]",
  );
}

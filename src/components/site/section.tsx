import { cn } from "@/lib/utils";

export function Section({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return <section className={cn("py-16 sm:py-24", className)} {...props} />;
}


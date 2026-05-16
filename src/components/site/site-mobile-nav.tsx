"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SiteNav } from "@/components/site/site-nav";

export function MobileNav() {
  return (
    <Sheet modal="trap-focus">
      <SheetTrigger render={<Button variant="outline" size="sm" />}>
        Menu
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px]">
        <SheetHeader>
          <SheetTitle>Navigate</SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-6">
          <SiteNav className="flex-col items-start gap-4" />
          <div className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

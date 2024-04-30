"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Service() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="text-center justify-center">
          <NavigationMenuTrigger className="font-sans flex text-4xl mb-4 text-center text-black font-bold hover:text-blue-700">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
              <Link
                href="/services/loss-prevention"
                className="flex  text-left  text-sm text-black font-bold hover:text-red-600"
              >
                Loss Prevention
              </Link>{" "}
              <Link
                href="/services/concierge-security-services"
                className="flex  text-left text-sm text-black font-bold hover:text-red-600"
              >
                Concierge Security Services
              </Link>{" "}
              <Link
                href="/services/commercial-high-rise-security"
                className="flex  text-left text-sm text-black font-bold hover:text-red-600"
              >
                Commercial High-Rise Security
              </Link>{" "}
              <Link
                href="/services/construction-sitesecurity"
                className="flex  text-left text-sm text-black font-bold hover:text-red-600"
              >
                Construction Site Security
              </Link>{" "}
              <Link
                href="/services/fire-watch-security"
                className="flex  text-left text-sm text-black font-bold hover:text-red-600"
              >
                Fire Watch Security
              </Link>{" "}
              <Link
                href="/services/mobile-control"
                className="flex  text-left text-sm text-black font-bold hover:text-red-600"
              >
                Mobile Patrol
              </Link>{" "}
              <Link
                href="/services/access-control-security"
                className="flex  text-left text-sm text-black font-bold hover:text-red-600"
              >
                Access Control Security
              </Link>{" "}
              <Link
                href="/services/cctv-security-camera-installation"
                className="flex  text-left text-sm text-black font-bold hover:text-red-600"
              >
                CCTV Security Camera Installation
              </Link>{" "}
              <Link
                href="/services/it-security"
                className="flex  text-left  text-sm text-black font-bold hover:text-red-600"
              >
                IT Security
              </Link>{" "}
              <Link
                href="tel:+1 (514) 560‑5863"
                className="flex  text-left text-sm text-black font-bold hover:text-red-600"
              >
                Private Investigation & Surveillance Services
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

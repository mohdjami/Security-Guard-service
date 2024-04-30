"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

interface DashboardNavProps {
  items: NavItem[];
}

export function DashboardNav({ items }: DashboardNavProps) {
  const path = usePathname();
  const { scrollYProgress } = useScroll();
  const [navOffset, setNavOffset] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const offset = Math.round(latest * 450);
      setNavOffset(offset);
    });

    return () => {
      unsubscribe();
      setNavOffset(0);
    };
  }, [scrollYProgress]);
  if (!items?.length) {
    return null;
  }

  return (
    <nav
      className="grid fixed  mt-72 left-1 h-[450px] rounded-md items-start bg-gray-900 p-4 gap-0"
      style={{ top: `-${navOffset}px` }}
    >
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "next"];
        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md text-l font-medium p-1 hover:bg-accent hover:text-accent-foreground",
                  path === item.href
                    ? "bg-accent text-gray-900"
                    : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <br />{" "}
                <span>
                  {item.title}
                  <br />
                  {item.titleLeft}
                </span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}

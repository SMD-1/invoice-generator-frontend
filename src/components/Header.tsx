"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const router = useRouter();
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Product",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Reports",
          href: "/reports",
        },
        {
          title: "Statistics",
          href: "/statistics",
        },
        {
          title: "Dashboards",
          href: "/dashboards",
        },
        {
          title: "Recordings",
          href: "/recordings",
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background border-b shadow-sm">
      <div className="container relative mx-auto min-h-14 flex gap-4 flex-row lg:grid lg:grid-cols-2 items-center">
        <div className="justify-start items-center gap-4 lg:flex flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink href={item.href}>
                        <Button variant="ghost" className="cursor-pointer">
                          {item.title}
                        </Button>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm hidden lg:flex">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="mt-10 cursor-pointer">
                              Book a call today
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded cursor-pointer"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex justify-end w-full gap-4">
          <Button variant="ghost" className="hidden md:inline cursor-pointer">
            Book a demo
          </Button>
          <div className="border-r hidden md:inline"></div>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Sign in
          </Button>
          <Button className="cursor-pointer">Get started</Button>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-14 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex justify-between items-center"
                        >
                          <span className="text-muted-foreground">
                            {subItem.title}
                          </span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

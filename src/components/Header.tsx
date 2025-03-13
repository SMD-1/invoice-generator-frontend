"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { LogOut, Menu, MoveRight, QrCode, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

export const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
    if (!token) router.push("/login");
  }, [pathName]);

  const logOut = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    router.push("/login");
    toast.success("Logged out successfully!");
  };

  // const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background border-b shadow-sm">
      <div className="mx-auto relative min-h-14 flex gap-4 flex-row items-center">
        <div className="justify-start items-center gap-4 lg:flex flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href && (
                    <NavigationMenuLink href={item.href}>
                      <Button variant="ghost" className="cursor-pointer">
                        {item.title}
                      </Button>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex justify-end w-full gap-4 mx-6">
          {/* <Button variant="ghost" className="hidden md:inline cursor-pointer">
            Book a demo
          </Button> */}
          {/* <div className="border-r hidden md:inline"></div> */}
          {!loggedIn ? (
            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Sign in
            </Button>
          ) : (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">
                  Settings
                </MenubarTrigger>
                <MenubarContent align="end">
                  <MenubarItem onClick={() => router.push("/login/code")}>
                    Generate QR code
                    <MenubarShortcut>
                      <QrCode />
                    </MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem onClick={logOut}>
                    Logout
                    <MenubarShortcut>
                      <LogOut />
                    </MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          )}
        </div>
        {/* <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-14 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href && (
                      <Link
                        href={item.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div> */}
      </div>
    </header>
  );
};

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

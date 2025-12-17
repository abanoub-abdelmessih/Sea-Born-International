"use client";

import { Menu as MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { auth, logo, menu } from "@/const/NavbarLinks";
import { Menu } from "@/types/NavbarTypes";
import Link from "next/link";
import Image from "next/image";
import LangToggle from "./LangToggle";
import { Separator } from "../ui/separator";

const Navbar = () => {
  return (
    <section className="py-4">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          {/* Logo */}
          <Link href={logo.url}>
            <Image
              src={logo.src}
              className="max-h-8 dark:invert"
              alt={logo.alt}
              width={50}
              height={44}
            />
          </Link>

          {/* Navbar Menu */}

          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              {/* Navbar Links */}
              {menu.map((item) => renderMenuItem(item))}

              {/* Separator Component */}
              <Separator orientation="vertical" />

              {/* Language Toggle */}
              <NavigationMenuItem>
                <LangToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Navbar Buttons */}
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <a href={auth.login.url}>{auth.login.title}</a>
            </Button>
            <Button asChild size="sm">
              <a href={auth.signup.url}>{auth.signup.title}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <MenuIcon className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto" side="top">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img
                        src={logo.src}
                        className="max-h-8 dark:invert"
                        alt={logo.alt}
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: Menu) => {
  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export { Navbar };

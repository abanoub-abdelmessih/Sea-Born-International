"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import LangToggle from "./LangToggle";
import { cn } from "@/lib/utils";
import {
  authConfig,
  brandConfig,
  navigationConfig,
  NavigationItem,
} from "@/const/NavbarLinks";

/* -------------------------------------------------------------------------- */
/*                                   Navbar component                         */
/* -------------------------------------------------------------------------- */

export function Navbar() {
  const pathname = usePathname();

  return (
    <section className="py-4 border-b shadow">
      {/* Desktop Navbar */}
      <DesktopNavbar pathname={pathname} />

      {/* Mobile Navbar */}
      <MobileNavbar pathname={pathname} />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Desktop Navbar                                   */
/* -------------------------------------------------------------------------- */

function DesktopNavbar({ pathname }: { pathname: string }) {
  return (
    <nav className="hidden container items-center justify-between lg:flex">
      <BrandLogo />
      <NavLinks pathname={pathname} />
      <AuthActions />
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Mobile Navbar                                   */
/* -------------------------------------------------------------------------- */

function MobileNavbar({ pathname }: { pathname: string }) {
  return (
    <nav className="flex container items-center justify-between lg:hidden px-4">
      <BrandLogo />

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon className="size-4" />
          </Button>
        </SheetTrigger>

        <SheetContent side="top">
          {/* Sheet Header */}
          <SheetHeader>
            <SheetTitle>
              <BrandLogo />
            </SheetTitle>
          </SheetHeader>

          {/* NavLinks */}
          <NavLinks pathname={pathname} />

          {/* Sheet Footer */}
          <SheetFooter>
            <AuthActions />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Brand Logo                                   */
/* -------------------------------------------------------------------------- */

function BrandLogo() {
  return (
    <Link href={brandConfig.url}>
      <Image
        src={brandConfig.logo.src}
        alt={brandConfig.logo.alt}
        width={50}
        height={44}
        className="max-h-8 dark:invert"
        priority
      />
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Navigation Links                               */
/* -------------------------------------------------------------------------- */

function NavLinks({ pathname }: { pathname: string }) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-col gap-8 lg:flex-row w-full">
        {navigationConfig.items.map((item) => (
          <NavLinkItem
            key={item.id}
            item={item}
            isActive={pathname === item.href}
          />
        ))}

        <Separator
          orientation="vertical"
          className="hidden bg-csk-500 lg:block"
        />

        <NavigationMenuItem className="hidden lg:block">
          <LangToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

/* -------------------------------------------------------------------------- */
/*                             Single Nav Item                                 */
/* -------------------------------------------------------------------------- */

interface NavLinkItemProps {
  item: NavigationItem;
  isActive: boolean;
}

function NavLinkItem({ item, isActive }: NavLinkItemProps) {
  return (
    <NavigationMenuItem className="w-full">
      <NavigationMenuLink
        asChild
        href={item.href}
        className={cn(
          "px-4 py-2 font-medium cursor-pointer",
          isActive && "border-b-2 border-csk-500 rounded-b-none"
        )}
      >
        <span>{item.label}</span>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Auth Actions                                  */
/* -------------------------------------------------------------------------- */

function AuthActions() {
  return (
    <div className="flex flex-col gap-2 lg:flex-row">
      <Button asChild variant="main">
        <Link href={authConfig.login.href}>{authConfig.login.label}</Link>
      </Button>

      <Button asChild variant="outline">
        <Link href={authConfig.signup.href}>{authConfig.signup.label}</Link>
      </Button>
    </div>
  );
}

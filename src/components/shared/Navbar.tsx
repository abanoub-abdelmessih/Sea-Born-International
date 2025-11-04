import {
  Home,
  LayoutDashboard,
  MapPin,
  Menu,
  MessageCircle,
  Package,
  User,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./language-toggle";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <header className="border-b sticky top-0 shadow bg-background z-50">
      <nav className="container mx-auto flex justify-between p-3">
        <NavbarLogo />

        {/* Desktop Links */}
        <NavbarLinks className="hidden xl:flex" />

        {/* Mobile Links */}
        <Sheet>
          {/* Sheet Trigger */}
          <SheetTrigger className="xl:hidden">
            <Button variant={"outline"} className="text-primary">
              <Menu />
            </Button>
          </SheetTrigger>

          {/* Sheet Content */}
          <SheetContent side="top" className="xl:hidden">
            <SheetHeader className="pb-0 flex-row justify-between pr-10">
              <NavbarLogo />
              <div className="space-x-1">
                <ModeToggle />
                <LanguageToggle />
              </div>
            </SheetHeader>
            <NavbarLinks className="flex flex-col items-start p-3 border-t" />
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

function NavbarLogo() {
  return (
    <Link href="/" className="flex gap-2 items-center">
      {/* <Image src="/logo.png" alt="company logo" width={25} height={25} /> */}
      <h6 className="font-bold text-lg">Sea Born International</h6>
    </Link>
  );
}

function NavbarLinks({ className }: { className?: string }) {
  const navLinks = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: User },
    { name: "Shipment", href: "/shipment", icon: Package },
    { name: "Tracking", href: "/tracking", icon: MapPin },
    { name: "Contact", href: "/contact", icon: MessageCircle },
  ];
  return (
    <ul className={cn("gap-2 lg:gap-3 items-center", className)}>
      {navLinks.map((link, index) => (
        <Button
          key={index}
          asChild
          variant={"ghost"}
          className="w-full justify-start xl:w-fit"
        >
          <li>
            <link.icon className="h-5 w-5 xl:hidden" />
            <Link href={link.href}>{link.name}</Link>
          </li>
        </Button>
      ))}

      {/* Large Screen Separator */}
      <Separator className="hidden xl:block" orientation="vertical" />

      {/* Navbar Buttons */}
      <div className="w-full xl:w-fit flex flex-col xl:flex-row items-center gap-2">
        <ModeToggle className="hidden xl:inline-flex" />
        <LanguageToggle className="hidden xl:inline-flex" />
        <Button variant="light" className="w-full xl:w-fit">
          Login
        </Button>
        <Button variant="main" className="w-full xl:w-fit">
          Sign up
        </Button>
      </div>
    </ul>
  );
}

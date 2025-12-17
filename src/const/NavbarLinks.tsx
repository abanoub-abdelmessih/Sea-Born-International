import { Auth, Logo, Menu } from "@/types/NavbarTypes";

export const logo: Logo = {
  url: "/",
  src: "/logo.svg",
  alt: "logo",
};

export const menu: Menu[] = [
  { title: "Home", url: "/" },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Tracking",
    url: "/tracking",
  },
  {
    title: "Equipments",
    url: "/equipments",
  },
  {
    title: "Careers",
    url: "/careers",
  },
  {
    title: "Contact Us",
    url: "/contact-us",
  },
];

// Auth Links
export const auth: Auth = {
  login: { title: "Login", url: "#" },
  signup: { title: "Sign up", url: "#" },
};

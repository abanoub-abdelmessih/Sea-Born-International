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
    url: "/",
  },
  {
    title: "Tracking",
    url: "/",
  },
  {
    title: "Equipments",
    url: "/",
  },
  {
    title: "Careers",
    url: "/",
  },
  {
    title: "Contact Us",
    url: "/",
  },
];

// Auth Links
export const auth: Auth = {
  login: { title: "Login", url: "#" },
  signup: { title: "Sign up", url: "#" },
};

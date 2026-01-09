/* -------------------------------------------------------------------------- */
/*                                   Brand                                     */
/* -------------------------------------------------------------------------- */

interface BrandLogo {
  src: string;
  alt: string;
}

interface BrandConfig {
  url: string;
  logo: BrandLogo;
}

export const brandConfig: BrandConfig = {
  url: "/",
  logo: {
    src: "/logo.svg",
    alt: "Brand Logo",
  },
};

/* -------------------------------------------------------------------------- */
/*                                   Navigation                                     */
/* -------------------------------------------------------------------------- */

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

interface NavigationConfig {
  items: NavigationItem[];
}

export const navigationConfig: NavigationConfig = {
  items: [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/services" },
    // { id: "tracking", label: "Tracking", href: "/tracking" },
    { id: "equipments", label: "Equipments", href: "/equipments" },
    // { id: "careers", label: "Careers", href: "/careers" },
    { id: "contact-us", label: "Contact us", href: "/contact-us" },
  ],
};

/* -------------------------------------------------------------------------- */
/*                                   Auth                                     */
/* -------------------------------------------------------------------------- */

interface AuthLink {
  label: string;
  href: string;
}

interface AuthConfig {
  login: AuthLink;
  signup: AuthLink;
}

export const authConfig: AuthConfig = {
  login: { label: "Login", href: "/login" },
  signup: { label: "Sign Up", href: "/signup" },
};

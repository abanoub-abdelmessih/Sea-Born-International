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
    { id: "products", label: "Products", href: "/products" },
    { id: "resources", label: "Resources", href: "/resources" },
    { id: "pricing", label: "Pricing", href: "/pricing" },
    { id: "blog", label: "Blog", href: "/blog" },
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

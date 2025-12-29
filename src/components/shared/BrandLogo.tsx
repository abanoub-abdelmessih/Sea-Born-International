import { brandConfig } from "@/const/NavbarLinks";
import Image from "next/image";
import Link from "next/link";

export default function BrandLogo() {
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

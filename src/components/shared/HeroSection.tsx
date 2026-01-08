import Image from "next/image";
import Heading from "./Heading";

interface HeroSectionProps {
  title: string;
  image: string;
}

export default function HeroSection({ title, image }: HeroSectionProps) {
  return (
    <header className="relative h-72 bg-black/60 flex items-center">
      {/* Hero Section Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover -z-10"
        sizes="100vw"
        priority
      />

      {/* Hero Title */}
      <Heading light title={title} className="text-white container" />
    </header>
  );
}

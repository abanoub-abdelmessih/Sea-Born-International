"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useCarousel from "../hooks/useCarousel";

// Data model for a single hero slide
interface HeroSlide {
  id: number;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  subtitle: string;
}

// Static hero carousel data
const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: {
      src: "/home/hero-1.jpg",
      alt: "Sea Freight",
    },
    title: "Global Sea Freight you can Rely on",
    subtitle:
      "Efficient container shipping with secure handling, competitive rates, and worldwide port coverage — delivering your cargo safely across the seas.",
  },
  {
    id: 2,
    image: {
      src: "/home/hero-2.jpg",
      alt: "Team Collaboration",
    },
    title: "Fast & Reliable Land Transportation",
    subtitle:
      "Seamless road freight solutions with trusted trucking networks, on-time delivery, and full tracking from pickup to destination.",
  },
  {
    id: 3,
    image: {
      src: "/home/hero-3.jpg",
      alt: "Data Analytics",
    },
    title: "Express Air Freight for Urgent Cargo",
    subtitle:
      "Premium air logistics designed for speed, precision, and highest cargo safety — ensuring your shipment arrives right on schedule.",
  },
];

export default function CarouselWithPagination() {
  const { api, setApi, current, isPaused, handleMouseEnter, handleMouseLeave } =
    useCarousel();
  return (
    <header
      className="w-dvw relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem
              key={slide.id}
              className="relative w-full h-[60vh] bg-black/40 flex flex-col justify-center items-center"
            >
              {/* Background image */}
              <Image
                src={slide.image.src}
                alt={slide.image.alt}
                fill
                className="object-cover -z-10"
                sizes="100vw"
                priority
              />

              {/* Slide content */}
              <div className="flex flex-col gap-3 lg:gap-4 text-white px-4">
                <h3 className="font-semibold text-3xl lg:text-6xl">
                  {slide.title}
                </h3>
                <h6 className="font-normal max-w-3xl text-sm">
                  {slide.subtitle}
                </h6>
                <Button className="w-fit mt-3" size="lg" variant="main">
                  Get a Quote
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination controls */}
      <PaginationControls api={api} current={current} />

      {/* Autoplay status indicator */}
      <div className="absolute bottom-5 right-5 z-10 text-white text-sm bg-black/30 px-2 py-1 rounded">
        {isPaused ? "Paused" : "Autoplay"}
      </div>
    </header>
  );
}

{
  /* Pagination controls component */
}
function PaginationControls({
  api,
  current,
}: {
  api: CarouselApi;
  current: number;
}) {
  return (
    <div className="mt-4 flex items-center justify-center gap-2 absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
      {Array.from({ length: heroSlides.length }).map((_, index) => (
        <button
          key={index}
          onClick={() => api?.scrollTo(index)}
          className={cn(
            "h-2.5 lg:h-3.5 w-6 lg:w-8 rounded-2xl bg-gray-400 cursor-pointer duration-300 hover:bg-gray-300",
            {
              "bg-csk-500 hover:bg-csk-300": current === index + 1,
            }
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

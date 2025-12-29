import { CarouselApi } from "@/components/ui/carousel";
import React from "react";

export default function useCarousel() {
  // Carousel API instance (provided by shadcn carousel)
  const [api, setApi] = React.useState<CarouselApi>();

  // Currently selected slide index (1-based for UI)
  const [current, setCurrent] = React.useState(0);

  // Autoplay state
  const [isPaused, setIsPaused] = React.useState(false);

  // Autoplay configuration
  const AUTOPLAY_INTERVAL = 5000; // 5 seconds

  // Sync carousel state with pagination when slide changes
  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Autoplay effect
  React.useEffect(() => {
    if (!api || isPaused) return;

    const interval = setInterval(() => {
      if (!api.canScrollNext()) {
        // If at the last slide, go back to first
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [api, isPaused]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return {
    api,
    setApi,
    current,
    setCurrent,
    isPaused,
    setIsPaused,
    handleMouseEnter,
    handleMouseLeave,
  };
}

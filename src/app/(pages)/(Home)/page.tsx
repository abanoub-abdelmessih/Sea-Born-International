import CarouselWithPagination from "./_modules/components/CarouselWithPagination";
import WhyChooseUs from "./_modules/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <CarouselWithPagination />

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </>
  );
}

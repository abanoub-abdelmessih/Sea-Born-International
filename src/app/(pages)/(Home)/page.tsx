import CarouselWithPagination from "./_modules/components/CarouselWithPagination";
import WhyChooseUs from "./_modules/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <CarouselWithPagination />

      <main className="container flex flex-col gap-20 py-20">
        {/* Why Choose Us Section */}
        <WhyChooseUs />
      </main>
    </>
  );
}

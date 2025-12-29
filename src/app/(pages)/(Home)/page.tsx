import CarouselWithPagination from "./_modules/components/CarouselWithPagination";
import AboutCompany from "./_modules/sections/AboutCompany";
import FeaturedEquipment from "./_modules/sections/FeaturedEquipment";
import OurServices from "./_modules/sections/OurServices";
import RequestAQuote from "./_modules/sections/RequestAQuote";
import Testimonials from "./_modules/sections/Testimonials";
import WhyChooseUs from "./_modules/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <CarouselWithPagination />

      <main className="container flex flex-col gap-12 lg:gap-20 py-10 lg:py-20">
        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* About Company Section*/}
        <AboutCompany />

        {/* Our Services Section*/}
        <OurServices />

        {/* Featured Equipment Section*/}
        <FeaturedEquipment />

        {/* Testimonials Section*/}
        <Testimonials />

        {/* Request A Quote Section*/}
        <RequestAQuote />
      </main>
    </>
  );
}

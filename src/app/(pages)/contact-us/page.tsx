import HeroSection from "@/components/shared/HeroSection";
import ContactInfo from "./_components/ContactInfo";
import MapSection from "./_components/MapSection";
import ContactForm from "./_components/ContactForm";

export default function ContactUs() {
  return (
    <>
      <HeroSection title="Contact us" image="/contact-us.jpg" />
      <ContactInfo />
      <MapSection />
      <ContactForm />
    </>
  );
}

import Heading from "@/components/shared/Heading";
import Image from "next/image";

const services = [
  {
    src: "/home/services-1.jpg",
    alt: "Sea Freight",
    title: "Sea Freight (for both FCL & LCL)",
    desc: `We specialize in Full Container Load (FCL) and Less than Container Load (LCL) shipments, providing reliable sea freight solutions across global routes. Our team handles general cargo, break bulk`,
  },
  {
    src: "/home/services-2.jpg",
    alt: "Air Freight",
    title: "Air Freight",
    desc: `Fast, secure, and dependable air freight services for time-sensitive shipments. We offer flexible solutions for all cargo types — from small parcels to large consignments — with door-to-door delivery options and full customs clearance`,
  },
  {
    src: "/home/services-3.jpg",
    alt: "Land Freight",
    title: "Trucking & Customs clearance",
    desc: `Complete customs clearance services to ensure smooth, legal, and delay-free cargo movement across borders. We handle all documentation, tariff classification, duty valuation, communication`,
  },
  {
    src: "/home/services-4.jpg",
    alt: "Customs Clearance",
    title: "Door-to-Door Delivery",
    desc: `End-to-end logistics service from pickup to final delivery — including transport, customs clearance, and full tracking`,
  },
];

export default function OurServices() {
  return (
    <section className="flex flex-col gap-4 lg:gap-8">
      {/* Section title */}
      <Heading title="Our Services" />

      {/* Services grid */}
      <main className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl relative aspect-2/3 lg:aspect-3/5 bg-linear-to-t from-black/80 to-transparent text-white flex flex-col justify-end group overflow-hidden"
          >
            {/* Service background image */}
            <Image
              src={service.src}
              alt={service.alt}
              fill
              className="object-cover -z-10 group-hover:scale-110 duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />

            {/* Service content */}
            <div className="flex flex-col gap-4 p-5">
              <h3 className="font-semibold text-2xl">{service.title}</h3>
              <p className="font-normal text-sm leading-normal">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}

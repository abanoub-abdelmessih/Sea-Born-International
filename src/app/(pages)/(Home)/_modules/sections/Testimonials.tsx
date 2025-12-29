import Heading from "@/components/shared/Heading";
import RoundedBorder from "../components/RoundedBorder";

const testimonials = [
  {
    desc: "Their team handled our shipments with exceptional care and coordination. Sea Born Egypt made the entire process — from pickup to customs clearance — smooth and stress-free.",
    title: "Logistics Manager, Industrial Goods Supplier",
  },
  {
    desc: "Professional, reliable, and always on time. Their sea and air freight services helped us reduce delays and improve our supply chain efficiency.",
    title: "Operations Director, Import/Export Company",
  },
  {
    desc: "We rely on Sea Born Egypt for our oversized cargo. Their handling, tracking, and communication are outstanding compared to other forwarders we worked with.",
    title: "Procurement Head, Heavy Equipment Distributor",
  },
];

export default function Testimonials() {
  return (
    <section className="flex flex-col gap-4 lg:gap-8">
      {/* Section title */}
      <Heading title="Testimonials" />

      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative p-5">
            {/* Border Top */}
            <RoundedBorder className="absolute top-0 right-0" />

            {/* Main Content */}
            <div className="flex flex-col justify-center items-center text-center gap-4">
              <p className="font-normal text-sm">{testimonial.desc}</p>
              <AvatarSVG />
              <h6 className="font-semibold text-sm">
                Logistics Manager, Industrial Goods Supplier
              </h6>
            </div>

            {/* Border Bottom */}
            <RoundedBorder className="absolute bottom-0 left-0 rotate-180" />
          </div>
        ))}
      </main>
    </section>
  );
}

// Person Image
function AvatarSVG() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#1A5BA1" />
      <mask
        id="mask0_44_487"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <circle cx="24" cy="24" r="24" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_44_487)">
        <ellipse
          cx="24.0003"
          cy="42.2397"
          rx="18.24"
          ry="10.56"
          fill="#D0EEFF"
        />
      </g>
      <ellipse cx="23.9999" cy="20.3998" rx="8.64" ry="8.64" fill="#D0EEFF" />
    </svg>
  );
}

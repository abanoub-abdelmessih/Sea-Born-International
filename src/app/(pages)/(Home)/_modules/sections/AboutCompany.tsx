import Heading from "@/components/shared/Heading";
import Image from "next/image";

export default function AboutCompany() {
  return (
    <section className="flex flex-col xl:flex-row items-center justify-between gap-4">
      <div className="flex flex-col justify-center gap-4 xl:gap-8">
        {/*  Primary section title */}
        <Heading title="About Company" />

        {/* About Text */}
        <p className="font-normal text-base xl:text-xl max-w-2xl leading-normal">
          Sea Born Egypt is a leading logistics provider with over a decade of
          experience in sea, air, and land freight.We offer end-to-end shipping
          solutions, from door-to-door delivery and oversized cargo handling to
          customs clearance and advanced tracking.With a skilled team and global
          network, we ensure fast, safe, and reliable cargo movement tailored to
          your business needs.
        </p>
      </div>

      {/* About Image */}
      <Image
        src="/home/about.png"
        alt="airplane image"
        width={600}
        height={400}
        className="object-contain rounded-lg w-full max-w-lg"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </section>
  );
}

import Heading from "@/components/shared/Heading";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedEquipment() {
  return (
    <section>
      {/* Section title */}
      <Heading title="Featured Equipment">
        <Link href={"/equipments"}>
          View All <ArrowRight />
        </Link>
      </Heading>
    </section>
  );
}

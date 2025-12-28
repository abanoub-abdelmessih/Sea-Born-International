import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Equipment = [
  {
    src: "/home/equipment-1.png",
    desc: "40' Reefer High Cube",
  },
  {
    src: "/home/equipment-2.png",
    desc: "40' Open Top Container",
  },
  {
    src: "/home/equipment-3.png",
    desc: "40' Open Top Container",
  },
];

export default function FeaturedEquipment() {
  return (
    <section className="flex flex-col gap-6 md:gap-8">
      {/* Section title */}
      <Heading title="Featured Equipment">
        <Link href={"/equipments"}>
          View All <ArrowRight />
        </Link>
      </Heading>

      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Equipment.map((equ, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="relative border-2 border-csk-500 rounded-2xl h-64">
              <Image
                src={equ.src}
                alt="Shipping Equipment"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-medium text-lg text-center">{equ.desc}</p>
          </div>
        ))}
      </main>

      {/* Section Footer */}
      <footer className="lg:hidden">
        <Button asChild variant={"main"} className="w-full">
          <Link href={"/equipments"}>
            View all <ChevronRight />
          </Link>
        </Button>
      </footer>
    </section>
  );
}

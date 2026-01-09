import type { Container } from "./types";
import ContainerCard from "./ContainerCard";
import Heading from "@/components/shared/Heading";

interface ContainerSectionProps {
  title: string;
  containers: Container[];
}

export default function ContainerSection({
  title,
  containers,
}: ContainerSectionProps) {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto space-y-8">
        {/* Section Title */}
        <Heading title={title} className="text-csk-600" />

        {/* Container List */}
        <div className="space-y-10">
          {containers.map((container, index) => (
            <ContainerCard key={index} container={container} />
          ))}
        </div>
      </div>
    </section>
  );
}

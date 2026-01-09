import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { Container } from "./types";

interface ContainerCardProps {
  container: Container;
}

export default function ContainerCard({ container }: ContainerCardProps) {
  const { title, image, inside, specs } = container;

  return (
    <Card className="shadow-none border-2 border-csk-500">
      <CardContent className="">
        <h3 className="text-lg md:text-xl font-semibold text-[#1a3a5c] mb-4">
          {title}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-center">
          {/* Specifications Table */}
          <div className="space-y-3 text-sm">
            {/* External Dimensions */}
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="font-medium text-gray-700">External:</span>
              <span className="text-gray-600">
                {specs.external.length} × {specs.external.width} ×{" "}
                {specs.external.height}
              </span>
            </div>

            {/* Internal Dimensions */}
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="font-medium text-gray-700">Internal:</span>
              <span className="text-gray-600">
                {specs.internal.length} × {specs.internal.width} ×{" "}
                {specs.internal.height}
              </span>
            </div>

            {/* Door Opening */}
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="font-medium text-gray-700">Door Opening:</span>
              <span className="text-gray-600">
                {specs.doorOpening.width} × {specs.doorOpening.height}
              </span>
            </div>

            {/* Weight */}
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="font-medium text-gray-700">Tare Weight:</span>
              <span className="text-gray-600">{specs.weight.tare}</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="font-medium text-gray-700">Max Cargo:</span>
              <span className="text-gray-600">{specs.weight.maxCargo}</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="font-medium text-gray-700">Max Gross:</span>
              <span className="text-gray-600">{specs.weight.maxGross}</span>
            </div>

            {/* Capacity */}
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="font-medium text-gray-700">Capacity:</span>
              <span className="text-gray-600">{specs.capacity}</span>
            </div>

            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="font-medium text-gray-700">Inside:</span>
              <span className="text-gray-600">{inside}</span>
            </div>
          </div>

          {/* Container Image */}
          <div className="relative w-full h-64 lg:h-[300px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

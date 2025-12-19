import { Card, CardContent } from "@/components/ui/card";
import { CircleCheckBig, Earth, Package2, Truck } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="grid grid-cols-4 gap-8">
      <Card className="border-csk-500 border-2">
        <CardContent className="flex flex-col items-center justify-center text-center gap-4">
          <span>
            <CircleCheckBig size={28} />
          </span>
          <p className="font-medium text-2xl max-w-3xs">
            +10Years of Experience
          </p>
        </CardContent>
      </Card>
      <Card className="border-csk-500 border-2">
        <CardContent className="flex flex-col items-center justify-center text-center gap-4">
          <span>
            <Earth size={28} />
          </span>
          <p className="font-medium text-2xl max-w-3xs">
            Global Network Coverage
          </p>
        </CardContent>
      </Card>
      <Card className="border-csk-500 border-2">
        <CardContent className="flex flex-col items-center justify-center text-center gap-4">
          <span>
            <Package2 size={28} />
          </span>
          <p className="font-medium text-2xl max-w-3xs">
            Integrated Freight Services
          </p>
        </CardContent>
      </Card>
      <Card className="border-csk-500 border-2">
        <CardContent className="flex flex-col items-center justify-center text-center gap-4">
          <span>
            <Truck size={28} />
          </span>
          <p className="font-medium text-2xl max-w-3xs">
            Oversized & General Cargo Experts
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

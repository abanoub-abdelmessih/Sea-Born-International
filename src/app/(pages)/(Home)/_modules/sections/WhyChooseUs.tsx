import { Card, CardContent } from "@/components/ui/card";
import { CircleCheckBig, Earth, Package2, Truck } from "lucide-react";

const FEATURES = [
  {
    icon: CircleCheckBig,
    text: "+10 Years of Experience",
  },
  {
    icon: Earth,
    text: "Global Network Coverage",
  },
  {
    icon: Package2,
    text: "Integrated Freight Services",
  },
  {
    icon: Truck,
    text: "Oversized Cargo Experts",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="grid gap-6 lg:gap-8 sm:grid-cols-2 xl:grid-cols-4">
      {FEATURES.map(({ icon: Icon, text }, index) => (
        <Card
          key={index}
          className="border-2 border-csk-500 items-center justify-center py-4"
        >
          <CardContent className="flex flex-col items-center justify-center text-center gap-4">
            <Icon size={28} className="text-csk-500" />
            <p className="font-medium text-lg xl:text-2xl max-w-3xs">{text}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}

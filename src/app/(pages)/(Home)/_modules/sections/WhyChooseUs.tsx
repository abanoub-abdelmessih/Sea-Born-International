import { Card, CardContent } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="container grid grid-cols-4">
      <Card className="border-csk-500 border-2">
        <CardContent className="flex flex-col items-center justify-center text-center gap-4">
          <span>
            <CircleCheckBig />
          </span>
          <p className="font-medium text-2xl max-w-3xs">
            +10Years of Experience
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

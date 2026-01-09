import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Heading from "@/components/shared/Heading";

interface ServiceSectionProps {
    id: string;
    title: string;
    description: string;
    services: string[];
    servicesTitle: string;
    image?: string;
    imagePosition?: "left" | "right";
}

export default function ServiceSection({
    id,
    title,
    description,
    services,
    servicesTitle,
    image,
    imagePosition = "right",
}: ServiceSectionProps) {
    const hasImage = !!image;

    return (
        <section id={id} className="py-12 bg-white">
            <div className="container mx-auto space-y-6">
                {/* Section Title */}
                <Heading title={title} className="text-primary" />

                {/* Content Grid */}
                <div
                    className={`grid grid-cols-1 ${hasImage ? "lg:grid-cols-2" : ""
                        } gap-8 items-start`}
                >
                    {/* Text Content - Order changes based on image position */}
                    <div
                        className={`space-y-6 ${hasImage && imagePosition === "left" ? "lg:order-2" : ""
                            }`}
                    >
                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed">{description}</p>

                        {/* Services List */}
                        <div className="space-y-3">
                            <h4 className="font-semibold text-gray-800">{servicesTitle}</h4>
                            <ul className="space-y-2">
                                {services.map((service, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2 text-gray-600"
                                    >
                                        <span className="text-primary font-bold mt-1">•</span>
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Image */}
                    {hasImage && (
                        <div
                            className={`${imagePosition === "left" ? "lg:order-1" : ""}`}
                        >

                            <div className="relative w-full h-[300px] lg:h-[400px]">
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover rounded-lg"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

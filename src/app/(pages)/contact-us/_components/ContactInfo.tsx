
import { Card, CardContent } from "@/components/ui/card";

export default function ContactInfo() {
    const contactDetails = [
        {
            title: "Address",
            content: (
                <>
                    108 Galal El-Desouky St.,
                    <br />
                    Building 7, Appt. 202,
                    <br />
                    Wabour Elmaya,
                    <br />
                    Alexandria - Egypt
                </>
            ),
        },
        {
            title: "Phone",
            content: (
                <>
                    (+2) 01026670800
                    <br />
                    <br />
                    (+2) 01281187654
                </>
            ),
        },
        {
            title: "Tel. & Fax",
            content: "+2 (03) 4859393/4/5",
        },
        {
            title: "E-mail",
            content: (
                <a
                    href="mailto:info@seabornegypt.com"
                    className="text-gray-600 hover:text-primary transition-colors"
                >
                    info@seabornegypt.com
                </a>
            ),
        },
    ];

    return (
        <section className="py-12 px-4 bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
                    {contactDetails.map((detail, index) => (
                        <Card key={index} className="border-none shadow-none">
                            <CardContent className="p-0">
                                <h3 className="text-xl font-bold text-[#1a3a5c] mb-3">
                                    {detail.title}
                                </h3>
                                <div className="text-gray-600 leading-relaxed">
                                    {detail.content}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

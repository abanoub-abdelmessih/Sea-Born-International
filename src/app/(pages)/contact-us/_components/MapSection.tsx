
import { Card, CardContent } from "@/components/ui/card";

export default function MapSection() {
    return (
        <section className="px-4 bg-white">
            <div className="container mx-auto">
                <Card className="overflow-hidden shadow-lg border-0">
                    <CardContent className="p-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.7234567890123!2d29.9167!3d31.2001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDEyJzAwLjQiTiAyOcKwNTUnMDAuMSJF!5e0!3m2!1sen!2seg!4v1234567890"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Sea Born Egypt Location"
                            className="w-full bg-gray-100"
                        />
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

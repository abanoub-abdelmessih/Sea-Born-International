
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
    return (
        <section className="py-12 px-4 bg-white">
            <div className="container mx-auto">
                <form className="space-y-6 max-w-lg mx-auto">
                    {/* Name */}
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" placeholder="Enter your name" />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone number</Label>
                        <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Write your message here"
                            className="resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" variant={"main"} className="w-full rounded-full" size="lg">
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    );
}

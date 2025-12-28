"use client";

import Heading from "@/components/shared/Heading";
import { FormEvent } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function RequestAQuote() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Section – Info */}
        <div className="flex flex-col gap-6">
          <Heading title="Request a Quote" />

          <p className="text-muted-foreground text-lg leading-relaxed">
            Tell us about your shipment and we’ll get back to you with a
            tailored logistics solution and a competitive price.
          </p>

          <div className="space-y-4 text-sm text-muted-foreground">
            <p>✔ Sea, Air & Land Freight</p>
            <p>✔ FCL & LCL Shipments</p>
            <p>✔ Fast response from our logistics team</p>
          </div>
        </div>

        {/* Right Section – Form */}
        <Card>
          <CardHeader>
            <CardTitle>Shipment Information</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Service */}
              <div className="space-y-2">
                <Label htmlFor="service">Service *</Label>
                <Input
                  id="service"
                  placeholder="Sea Freight, Air Freight..."
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">message</Label>
                <Textarea
                  id="message"
                  rows={7}
                  placeholder="Write your message here"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                variant="main"
                size={"lg"}
              >
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

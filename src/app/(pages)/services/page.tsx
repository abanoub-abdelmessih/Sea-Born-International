import HeroSection from "@/components/shared/HeroSection";
import ServiceSection from "./_components/ServiceSection";

// Services data
const seaFreightServices = [
    "Door to door freight forwarding services",
    "Export consolidation services",
    "Import consolidation services",
    "Project Sea freight cargo",
    "Packaging",
    "Custom Clearance and Delivery",
];

const airFreightServices = [
    "Consolidations",
    "Booked Space allocation with choice of airlines",
    "Secure warehousing facilities (W.H.R. etc.)",
    "Packaging (General Cargo and DGR Goods)",
    "Sea/Air/Multi services",
    "Cross trade services",
    "Door to door freight services",
    "DGR goods (landing including radioactive shipments)",
    "Special Cargo handlings",
    "Custom Clearance and Delivery",
];

const doorToDoorServices = [
    "Delivers to the shipper empty container for cargo loading",
    "Cargo Insurance",
    "All the documentation support need for the cargo export",
    "Intermodal services - rail and truck",
    "Container receiving in the port and preparing for shipment",
    "Custom clearance at port of destination and arranges delivery to the final destination",
];

const customsClearanceServices = [
    "24-hour service for clearing born sea & Air export shipments",
    "Pre-clearance approvals, drawback, temporary import, free zones and related customs services for all import shipment regardless of commodity",
    "Accompanying customs delegates by land. Most customs brokers, are exporting them to factories by sea and overseeing offers for inspection of goods and finalizing customs for refunds and remaining export contracts",
    "Customs consulting, tariff and commodity interpretation",
];

export default function ServicesPage() {
    return (
        <>
            <HeroSection title="Services" image="/services/hero.jpg" />

            {/* Sea Freight Section */}
            <ServiceSection
                id="sea-freight"
                title="Sea Freight (for both FCL & LCL)"
                description="At Sea Born Egypt we are able to provide competitive solutions for your Sea Freight transport. With a strong network of worldwide contracts our staff can provide expert guidance for all your logistics needs when moving cargo overseas as an independent freight management company, we negotiate with only the most reliable shipping companies to obtain the most competitive rates on both FCL(Full container load) and LCL (less than container load) shipments moving and importing."
                services={seaFreightServices}
                servicesTitle="Our Sea freight services include:"
                image="/services/services-1.jpg"
                imagePosition="right"
            />

            {/* Air Freight Section */}
            <ServiceSection
                id="air-freight"
                title="Air Freight"
                description="Sea Born Egypt offers its customers with professional and comprehensive air freight solutions committed to safety, reliability and security. Our dedicated network of regional and ground services combines a synergy of our strong relationships with all the major commercial airlines, cargo carriers and charters available to give our customers the best attention and service they can expect from an international freight management company."
                services={airFreightServices}
                image="/services/services-2.jpg"
                servicesTitle="Our Airfreight services include:"
            />

            {/* Door to Door Section */}
            <ServiceSection
                id="door-to-door"
                title="Door to door container transportation"
                description="Door to door delivery is the most convenient delivery way of shipment for the customer. In this case the customer is free of all the arrangements in place with the sea freight container shipment. We are in charge of all the process beginning with container loading delivery to the port, and making space matter. One of the most important parts in this process is measuring one's individual to half a time important role of a cargo, door to door delivery remain at some fitness and speed of the process. We will provide you with all the export documentation support in every step of the process."
                services={doorToDoorServices}
                servicesTitle="Door to Door delivery - it is a complicated and multistage process embracing whole spectrum of tasks like:"
                image="/services/services-3.jpg"
                imagePosition="left"
            />

            {/* Trucking & Customs Section */}
            <ServiceSection
                id="customs"
                title="Trucking & Customs clearance"
                description="Sea Born Egypt is a licensed customs broker employing 20 in-house customs brokers serving in all Egyptian air and sea ports. Our professional and long years experienced customs brokers have long-term relations with customs officials and can swiftly clear merchandise and equipment for on-time deliveries. East need also clears goods of all kind receiving a wide range of products, as well as providing."
                services={customsClearanceServices}
                image="/services/services-4.jpg"
                servicesTitle="Our Customs Clearance services include:"
            />
        </>
    );
}

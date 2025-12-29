import BrandLogo from "./BrandLogo";

const footerSections = {
  services: {
    title: "Services",
    items: [
      "Sea Freight",
      "Air Freight",
      "Land Transportation",
      "Customs Clearance",
    ],
  },
  phones: {
    title: "Phone",
    items: ["(+2) 01026670800", "+2 (03) 4859393/4/5", "(+2) 01281187654"],
  },
};

export default function Footer() {
  return (
    <footer className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <BrandLogo />
            <p className="text-gray-600 text-sm">
              Your trusted partner in global logistics and freight solutions.
            </p>
          </div>

          {/* Services Section */}
          <div className="flex flex-col gap-3">
            <h6 className="font-semibold text-gray-900 text-lg mb-2">
              {footerSections.services.title}
            </h6>
            <ul className="flex flex-col gap-2">
              {footerSections.services.items.map((service) => (
                <li
                  key={service}
                  className="text-gray-600 hover:text-blue-900 cursor-pointer transition-colors"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Address Section */}
          <div className="flex flex-col gap-3">
            <h6 className="font-semibold text-gray-900 text-lg mb-2">
              Address
            </h6>
            <p className="text-gray-600 text-sm leading-relaxed">
              108 Galal El-Desouky St., Building 7, Appt. 202, Wabour Elmaya,
              Alexandria – Egypt
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-3">
            <h6 className="font-semibold text-gray-900 text-lg mb-2">
              {footerSections.phones.title}
            </h6>
            <ul className="flex flex-col gap-2">
              {footerSections.phones.items.map((phone) => (
                <li
                  key={phone}
                  className="text-gray-600 hover:text-blue-900 cursor-pointer transition-colors"
                >
                  {phone}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Sea Born Egypt. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

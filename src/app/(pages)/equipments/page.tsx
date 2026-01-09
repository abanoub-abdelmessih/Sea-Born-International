import HeroSection from "@/components/shared/HeroSection";
import ContainerSection from "./_components/ContainerSection";

// Container data
const containers20ft = [
  {
    title: "20' Standard Steel Container",
    image: "/equipments/20/equipment-1.png",

    inside: "Inside",
    specs: {
      external: { length: "6,058 mm", width: "2,438 mm", height: "2,591 mm" },
      internal: { length: "5,898 mm", width: "2,352 mm", height: "2,393 mm" },
      doorOpening: { width: "2,340 mm", height: "2,280 mm" },
      weight: {
        tare: "2,200 kg",
        maxCargo: "28,280 kg",
        maxGross: "30,480 kg",
      },
      capacity: "33.2 m³",
    },
  },
  {
    title: "20' Hardwood",
    image: "/equipments/20/equipment-2.png",

    inside: "Inside",
    specs: {
      external: { length: "6,058 mm", width: "2,438 mm", height: "2,591 mm" },
      internal: { length: "5,898 mm", width: "2,352 mm", height: "2,393 mm" },
      doorOpening: { width: "2,340 mm", height: "2,280 mm" },
      weight: {
        tare: "2,200 kg",
        maxCargo: "28,280 kg",
        maxGross: "30,480 kg",
      },
      capacity: "33.2 m³",
    },
  },
  {
    title: "20' Open Top Container",
    image: "/equipments/20/equipment-3.png",

    inside: "Inside",
    specs: {
      external: { length: "6,058 mm", width: "2,438 mm", height: "2,591 mm" },
      internal: { length: "5,898 mm", width: "2,352 mm", height: "2,346 mm" },
      doorOpening: { width: "2,340 mm", height: "2,280 mm" },
      weight: {
        tare: "2,360 kg",
        maxCargo: "28,120 kg",
        maxGross: "30,480 kg",
      },
      capacity: "32.5 m³",
    },
  },
  {
    title: "20' Flat Rack",
    image: "/equipments/20/equipment-4.png",

    inside: "Inside",
    specs: {
      external: { length: "6,058 mm", width: "2,438 mm", height: "2,591 mm" },
      internal: { length: "5,698 mm", width: "2,230 mm", height: "2,331 mm" },
      doorOpening: { width: "-", height: "-" },
      weight: {
        tare: "2,700 kg",
        maxCargo: "27,780 kg",
        maxGross: "30,480 kg",
      },
      capacity: "-",
    },
  },
  {
    title: "20' Open Top Container",
    image: "/equipments/20/equipment-5.png",

    inside: "Inside",
    specs: {
      external: { length: "6,058 mm", width: "2,438 mm", height: "2,591 mm" },
      internal: { length: "5,898 mm", width: "2,352 mm", height: "2,346 mm" },
      doorOpening: { width: "2,340 mm", height: "2,280 mm" },
      weight: {
        tare: "2,360 kg",
        maxCargo: "28,120 kg",
        maxGross: "30,480 kg",
      },
      capacity: "32.5 m³",
    },
  },
];

const containers40ft = [
  {
    title: "40' Standard Steel Container",
    image: "/equipments/40-standard.png",

    inside: "Inside",
    specs: {
      external: { length: "12,192 mm", width: "2,438 mm", height: "2,591 mm" },
      internal: { length: "12,032 mm", width: "2,352 mm", height: "2,393 mm" },
      doorOpening: { width: "2,340 mm", height: "2,280 mm" },
      weight: {
        tare: "3,750 kg",
        maxCargo: "26,730 kg",
        maxGross: "30,480 kg",
      },
      capacity: "67.7 m³",
    },
  },
  {
    title: "40' High Cube Container",
    image: "/equipments/40-high-cube.png",

    inside: "Inside",
    specs: {
      external: { length: "12,192 mm", width: "2,438 mm", height: "2,896 mm" },
      internal: { length: "12,032 mm", width: "2,352 mm", height: "2,698 mm" },
      doorOpening: { width: "2,340 mm", height: "2,585 mm" },
      weight: {
        tare: "3,940 kg",
        maxCargo: "26,540 kg",
        maxGross: "30,480 kg",
      },
      capacity: "76.4 m³",
    },
  },
  {
    title: "40' High Cube Reefer Container",
    image: "/equipments/40-high-cube-reefer.png",

    inside: "Inside",
    specs: {
      external: { length: "12,192 mm", width: "2,438 mm", height: "2,896 mm" },
      internal: { length: "11,561 mm", width: "2,294 mm", height: "2,544 mm" },
      doorOpening: { width: "2,294 mm", height: "2,559 mm" },
      weight: {
        tare: "5,480 kg",
        maxCargo: "25,000 kg",
        maxGross: "30,480 kg",
      },
      capacity: "67.5 m³",
    },
  },
  {
    title: "40' Dry Hardwood",
    image: "/equipments/40-dry-hardwood.png",

    inside: "Inside",
    specs: {
      external: { length: "12,192 mm", width: "2,438 mm", height: "2,591 mm" },
      internal: { length: "12,032 mm", width: "2,352 mm", height: "2,393 mm" },
      doorOpening: { width: "2,340 mm", height: "2,280 mm" },
      weight: {
        tare: "3,750 kg",
        maxCargo: "26,730 kg",
        maxGross: "30,480 kg",
      },
      capacity: "67.7 m³",
    },
  },
  {
    title: "40' Reefer High Cube",
    image: "/equipments/40-reefer-high-cube.png",

    inside: "Inside",
    specs: {
      external: { length: "12,192 mm", width: "2,438 mm", height: "2,896 mm" },
      internal: { length: "11,561 mm", width: "2,294 mm", height: "2,544 mm" },
      doorOpening: { width: "2,294 mm", height: "2,559 mm" },
      weight: {
        tare: "5,480 kg",
        maxCargo: "25,000 kg",
        maxGross: "30,480 kg",
      },
      capacity: "67.5 m³",
    },
  },
  {
    title: "40' Open Top Container",
    image: "/equipments/40-open-top.png",

    inside: "Inside",
    specs: {
      external: { length: "12,192 mm", width: "2,438 mm", height: "2,591 mm" },
      internal: { length: "12,032 mm", width: "2,352 mm", height: "2,346 mm" },
      doorOpening: { width: "2,340 mm", height: "2,280 mm" },
      weight: {
        tare: "4,000 kg",
        maxCargo: "26,480 kg",
        maxGross: "30,480 kg",
      },
      capacity: "66.4 m³",
    },
  },
  {
    title: "40' Flat Rack Container",
    image: "/equipments/40-flat-rack.png",

    inside: "Inside",
    specs: {
      external: { length: "12,192 mm", width: "2,438 mm", height: "2,591 mm" },
      internal: { length: "11,784 mm", width: "2,230 mm", height: "2,014 mm" },
      doorOpening: { width: "-", height: "-" },
      weight: {
        tare: "5,300 kg",
        maxCargo: "25,180 kg",
        maxGross: "30,480 kg",
      },
      capacity: "-",
    },
  },
  {
    title: "45' HC Platform Container",
    image: "/equipments/45-hc-platform.png",

    inside: "Inside",
    specs: {
      external: { length: "13,716 mm", width: "2,500 mm", height: "2,896 mm" },
      internal: { length: "13,556 mm", width: "2,444 mm", height: "2,695 mm" },
      doorOpening: { width: "2,444 mm", height: "2,597 mm" },
      weight: {
        tare: "4,800 kg",
        maxCargo: "27,680 kg",
        maxGross: "32,480 kg",
      },
      capacity: "89.4 m³",
    },
  },
];

export default function EquipmentsPage() {
  return (
    <>
      <HeroSection title="Equipments" image="/equipments/hero.jpg" />
      <ContainerSection title="20' Containers" containers={containers20ft} />
      <ContainerSection title="40' Containers" containers={containers40ft} />
    </>
  );
}

import React from "react";
import Products from "./Products";

const serviceList = [
  {
    title: "Structural Steel Systems",
    desc: "Engineered steel frameworks for complex and large-scale construction projects.",
    img: "/images/services/structural-steel.jpg",
    items: ["High-Rise Building Frames", "Stadium & Arena Structures", "Steel Bridge Systems"],
  },
  {
    title: "Light Steel & Mezzanine Systems",
    desc: "Optimized lightweight steel solutions for efficient space utilization.",
    img: "/images/services/mezzanine-steel.jpg",
    items: ["Light Steel Structures", "Steel Mezzanine Floors", "Suspended Steel Flooring"],
  },
  {
    title: "Prefabricated & Industrial Buildings",
    desc: "Factory-engineered steel buildings for fast-track project execution.",
    img: "/images/services/prefab-buildings.jpg",
    items: ["Prefabricated Steel Buildings", "Industrial Facilities", "Tarpaulin-Covered Steel Structures"],
  },
  {
    title: "Logistics & Warehouse Structures",
    desc: "Heavy-duty steel systems for logistics, storage, and distribution facilities.",
    img: "/images/services/logistics-warehouse.jpg",
    items: ["Logistics Warehouses", "High-Span Roof Structures", "Racking Support Systems"],
  },
  {
    title: "Specialized & Retractable Systems",
    desc: "Custom-engineered steel solutions for advanced architectural requirements.",
    img: "/images/services/retractable-systems.jpg",
    items: ["Retractable Glass Roof Systems", "Special Purpose Steel Structures", "Architectural Steel Elements"],
  },
  {
    title: "Energy, Utility & Access Systems",
    desc: "Steel systems designed for safety, durability, and operational efficiency.",
    img: "/images/services/energy-doors.jpg",
    items: ["Steel Transformer Doors", "Steel Energy Doors", "Access & Service Openings"],
  },
  {
    title: "Shutters, Barriers & Automation",
    desc: "Automated steel access and security systems for industrial and commercial use.",
    img: "/images/services/shutters-automation.jpg",
    items: ["Steel Rolling Shutters", "Automated Shutter Systems", "Gate & Barrier Solutions"],
  },
  {
    title: "Protective & Safety Structures",
    desc: "Fabricated steel systems focused on protection, safety, and compliance.",
    img: "/images/services/protective-railings.jpg",
    items: ["Protective Steel Railings", "Guardrails & Handrails", "Safety Barrier Systems"],
  },
  {
    title: "Villas & Residential Steel Systems",
    desc: "Modern steel construction solutions for villas and residential developments.",
    img: "/images/services/steel-villas.jpg",
    items: [
      "Steel Villas Construction",
      "Residential Steel Framing Systems",
      "Luxury Villa Steel Structures",
      "Custom Steel Housing Solutions",
    ],
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-950">
      <Products serviceList={serviceList} />
    </div>
  );
}

export const site = {
  name: "John Mold Inspection & Testing",
  url: "https://johnmoldinspectiontesting.com",
  phone: "(818) 720-7120",
  phoneHref: "tel:8187207120",
  email: "info@johnmoldinspectiontesting.com",
  address: "Tarzana CA 91356",
  city: "Tarzana",
  region: "CA",
  postalCode: "91356",
  logo:
    "https://johnmoldinspectiontesting.com/wp-content/uploads/2025/06/johnmoldinspectiontesting-logo-1.png",
  mapUrl: "https://maps.app.goo.gl/3jopKVQy6wB6C51e6",
};

export const serviceAreas = [
  "Tarzana",
  "Encino",
  "Woodland Hills",
  "Canoga Park",
  "Sherman Oaks",
  "Greater Los Angeles",
];

export const services = [
  {
    slug: "moisture-detection",
    title: "Moisture Detection",
    heading: "Advanced Moisture Detection in Tarzana, CA",
    summary:
      "Find hidden water intrusion behind walls, under floors, and near plumbing before mold or structural issues spread.",
    image: "https://johnmoldinspectiontesting.com/wp-content/uploads/2025/09/1737365340621-leak-detector-hero.webp",
    secondaryImage:
      "https://johnmoldinspectiontesting.com/wp-content/uploads/2025/09/tramexmepwithipadmoistureapp-800x600-1-w1200.jpg",
    sections: [
      "Accurate Inspections Using Advanced Methods",
      "Protect Your Property with Expert Moisture Detection Services",
      "Schedule a Moisture Inspection Today",
    ],
  },
  {
    slug: "infrared-technology",
    title: "Infrared Technology",
    heading: "Infrared Technology in Tarzana, CA",
    summary:
      "Thermal imaging reveals temperature changes that can point to concealed water damage, leaks, and mold-prone conditions.",
    image:
      "https://johnmoldinspectiontesting.com/wp-content/uploads/2025/09/Thermal_Imaging_Home_AdobeStock_133972290.jpg",
    secondaryImage:
      "https://johnmoldinspectiontesting.com/wp-content/uploads/2025/09/thermal-imaging-for-home-inspections.jpg",
    sections: [
      "Professional Thermal Imaging You Can Trust",
      "Safe Infrared Technology for Hidden Problems",
      "Book Your Professional Infrared Inspection Today",
    ],
  },
  {
    slug: "surface-samples",
    liveSlug: "surface-sample",
    title: "Surface Sample",
    heading: "Surface Mold Sampling in Tarzana, CA",
    summary:
      "Targeted swab and tape-lift sampling helps identify visible growth, suspicious staining, and post-cleanup conditions.",
    image: "https://johnmoldinspectiontesting.com/wp-content/uploads/2025/09/image-55.webp",
    secondaryImage:
      "https://johnmoldinspectiontesting.com/wp-content/uploads/2025/09/Colonies-of-different-bacteria-1080x675-1.jpg",
    sections: [
      "Professional Sample Collection & Lab Testing",
      "Why Surface Sampling Matters",
      "Schedule a Surface Mold Test Today",
    ],
  },
  {
    slug: "air-quality",
    liveSlug: "air-quality-samples",
    title: "Air Quality Samples",
    heading: "Indoor Air Quality Testing in Tarzana, CA",
    summary:
      "Indoor and outdoor air samples clarify spore levels, hidden mold concerns, and potential exposure risks.",
    image:
      "https://johnmoldinspectiontesting.com/wp-content/uploads/2025/09/Air-Quality-Test-scaled-1.webp",
    secondaryImage:
      "https://johnmoldinspectiontesting.com/wp-content/uploads/2025/09/smslabs-air-quality-testing.webp",
    sections: [
      "Scientific Air Sampling & Spore Analysis",
      "Why Air Testing is Important",
      "Book Your Air Quality Test Today",
    ],
  },
  {
    slug: "mold-remediation",
    title: "Mold Remediation",
    heading: "Expert Mold Remediation in Tarzana, CA",
    summary:
      "Clear containment, cleanup, and prevention guidance for safer remediation planning and long-term protection.",
    image:
      "https://johnmoldinspectiontesting.com/wp-content/uploads/2024/03/Mold_iStock-1220185937-scaled-1.jpg",
    secondaryImage:
      "https://johnmoldinspectiontesting.com/wp-content/uploads/2025/09/NRE-Mold-1200x675-1024x576-1.jpg",
    sections: [
      "Safe Removal & Containment Procedures",
      "Why Mold Remediation Is Critical",
      "Request a Mold Remediation Estimate",
    ],
  },
];

export function servicePath(service: (typeof services)[number]) {
  return `/${service.liveSlug || service.slug}/`;
}

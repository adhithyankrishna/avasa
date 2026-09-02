import { Metadata } from "next";
import ZiplineClient from "./zipline-client";

export const metadata: Metadata = {
  title: "Eagle's Flight — India's Longest Zipline, 1.8 Kilometers | AVASA Nature",
  description: "Fly Eagle's Flight, India's longest zipline at 1.8 kilometers, soaring up to 250 meters above the tea valleys of the Western Ghats. Includes a 4x4 jeep ascent to the launch platform.",
};

export default function Page() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Eagle's Flight Zipline",
    "image": "https://avasaexperiences.com/assets/images/adventure_hero.webp",
    "description": "Eagle's Flight is India's longest zipline, a 1.8-kilometer glide up to 250 meters above the tea valleys of the Western Ghats, reaching speeds of 50-70 km/h. Includes a 7km 4x4 jeep ascent to the launch platform.",
    "brand": {
      "@type": "Brand",
      "name": "AVASA Nature"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://avasaexperiences.com/adventure/eagles-flight-zipline",
      "priceCurrency": "INR",
      "price": "3999",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long is the Eagle's Flight zipline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eagle's Flight is India's longest zipline, stretching 1.8 kilometers across the tea valleys of the Western Ghats, with riders reaching heights of up to 250 meters above the ground."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a weight or age limit for ziplining?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum age is 8 years, and the weight limit is between 35 kg and 110 kg for safety reasons."
        }
      },
      {
        "@type": "Question",
        "name": "What safety certifications do you have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use double-redundant steel cables, Petzl pulleys, and high-altitude climbing harnesses checked daily by certified guides."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ZiplineClient />
    </>
  );
}

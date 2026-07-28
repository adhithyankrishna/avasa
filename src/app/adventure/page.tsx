import { Metadata } from "next";
import AdventureClient from "./adventure-client";

export const metadata: Metadata = {
  title: "Eagle's Flight Zipline & Kayaking — Adventure Activities in Kerala | AVASA Nature",
  description: "Zipline across India's longest canopy line, kayak the Chaliyar rapids, bamboo raft, trek — book adventure activities in Wayanad, Munnar & Chaliyar, Kerala.",
};

export default function Page() {
  const touristAttractionSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Eagle's Flight Zipline",
    "description": "Eagle's Flight is one of the longest canopy ziplines in India, flying high above the rainforest canopy in Kerala.",
    "touristType": "Adventure Seekers",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kerala",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />
      <AdventureClient />
    </>
  );
}

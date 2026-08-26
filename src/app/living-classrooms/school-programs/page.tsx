import { Metadata } from "next";
import SchoolClient from "./school-client";

export const metadata: Metadata = {
  title: "Outdoor Learning Camps & School Adventure Programs in Wayanad | AVASA Nature",
  description: "Bring your students to AVASA's Living Classrooms. We run safety-certified school adventure camps, wilderness science tours, and outdoor learning in Wayanad, Kerala.",
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Living Classrooms — School Adventure & Outdoor Learning Programs",
    "image": "https://avasaexperiences.com/assets/images/living_classrooms_hero.webp",
    "description": "Customized school adventure camps, wilderness science field studies, and outdoor learning expeditions in Wayanad and Munnar, Kerala.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "AVASA Nature",
      "telephone": "+91-6235-800-111",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Wayanad, Kerala, India"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "1500"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What age groups are eligible for the Living Classrooms program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Programs are open to students from Grade 5 up to undergraduate level, with safety protocols, difficulty grades, and curriculum modules tailored to each age group."
        }
      },
      {
        "@type": "Question",
        "name": "What safety precautions are in place for student groups?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every program maintains a strict 1:8 guide-to-student safety ratio. Instructors are certified in wilderness first aid (WFA) and swiftwater rescue, and we use certified CE/UIAA safety gear."
        }
      },
      {
        "@type": "Question",
        "name": "Can AVASA deliver programs on our school campus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we run both on-campus challenge installations (ropes courses, climbing nets) and off-site expeditions at our Wayanad or Munnar base camps."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SchoolClient />
    </>
  );
}

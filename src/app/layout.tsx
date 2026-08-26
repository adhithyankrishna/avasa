import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryDrawer from "@/components/EnquiryDrawer";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://avasaexperiences.com"),
  title: "AVASA Nature | Premium Glamping & Adventure Experiences in Kerala",
  description:
    "Premium glamping stays, India's longest zipline, and adventure camps in Kerala. Sleep in luxury tree tents, domes, and learn outdoors.",
  verification: {
    google: "google47a5b5ff125c6b41",
  },
  openGraph: {
    title: "AVASA Nature | Premium Glamping & Adventure Experiences",
    description: "Premium glamping stays, India's longest zipline, and adventure camps in Kerala. Sleep in luxury tree tents, domes, and learn outdoors.",
    url: "https://avasaexperiences.com",
    siteName: "AVASA Nature",
    images: [
      {
        url: "/assets/social-share.webp",
        width: 1200,
        height: 630,
        alt: "AVASA Nature — Premium Glamping & Adventure Stays in Wayanad, Kerala",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVASA Nature | Premium Glamping & Adventure Experiences",
    description: "Premium glamping stays, India's longest zipline, and adventure camps in Kerala. Sleep in luxury tree tents, domes, and learn outdoors.",
    images: ["/assets/social-share.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AVASA Nature",
    "url": "https://avasaexperiences.com",
    "logo": "https://avasaexperiences.com/assets/logo.webp",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-6235-800-111",
        "contactType": "customer service"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-6235-800-222",
        "contactType": "customer service"
      }
    ]
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <PageTransition>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <EnquiryDrawer />
        </PageTransition>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryDrawer from "@/components/EnquiryDrawer";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "AVASA Nature — Experiences & Beyond",
  description:
    "AVASA Nature is a premium experience design company. Immersive. Purposeful. Transformative. Sleep among the treetops, adventure across canopy lines, and grow in nature's classrooms.",
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
  return (
    <html lang="en">
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

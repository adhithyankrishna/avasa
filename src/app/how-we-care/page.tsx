import { Metadata } from "next";
import HowWeCareClient from "./how-we-care-client";

export const metadata: Metadata = {
  title: "Safety, Support & What's Included | AVASA Nature",
  description: "Every AVASA trip includes certified safety gear, trained guides, meals, transport, and first aid. See exactly what's included.",
};

export default function Page() {
  return <HowWeCareClient />;
}

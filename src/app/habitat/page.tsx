import { Metadata } from "next";
import HabitatClient from "./habitat-client";

export const metadata: Metadata = {
  title: "Glamping, Tree Tents & Dome Stays in Wayanad & Munnar | AVASA Nature",
  description: "Sleep in tensile tree tents, tipi glamping, and geodesic domes across Kerala. Stingray Tribe & Tipi Tribe stays, curated nature accommodation.",
};

export default function Page() {
  return <HabitatClient />;
}

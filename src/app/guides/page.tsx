import { Metadata } from "next";
import GuidesClient from "./guides-client";

export const metadata: Metadata = {
  title: "Travel & Adventure Guides — Wayanad Glamping & Outdoors | AVASA Nature",
  description: "Read our comprehensive guides on Wayanad glamping, ziplining, school adventure camps, corporate offsites, and travel tips for Wayanad, Kerala.",
};

export default function Page() {
  return <GuidesClient />;
}

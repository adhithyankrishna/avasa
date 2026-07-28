import { Metadata } from "next";
import LivingClassroomsClient from "./living-classrooms-client";

export const metadata: Metadata = {
  title: "Experiential Learning & Outdoor Education Programs | AVASA Nature",
  description: "Outdoor learning camps, leadership development, and school expeditions across Kerala. Experiential education for schools & colleges.",
};

export default function Page() {
  return <LivingClassroomsClient />;
}

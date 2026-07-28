import { Metadata } from "next";
import ProjectsClient from "./projects-client";

export const metadata: Metadata = {
  title: "Zipline Design, Tree Tent Installation & Eco-Tourism Infrastructure | AVASA Nature",
  description: "Adventure park design, zipline installation, and destination development for resorts, schools & developers — pan-India infrastructure consulting.",
};

export default function Page() {
  return <ProjectsClient />;
}

import { type Metadata } from "next";
import TechnologyHero from "@/components/webside/technology/TechnologyHero";
import TechnologyGrid from "@/components/webside/technology/TechnologyGrid";
import technologyPageData from "@/data/technology.data";
import TechnologysHero from "@/components/webside/technology/TechnologysHero";
import Technologys from "@/components/webside/home/Technologys";

export const metadata: Metadata = {
  title: "Technology | Vivtex",
  description:
    "Explore our latest technologies and scientific publications. Advanced biotechnology research and innovations for drug delivery.",
  keywords:
    "biotechnology, drug delivery, research, technology, publications, oral drugs",
  openGraph: {
    title: "Technology | Vivtex",
    description:
      "Explore our latest technologies and scientific publications from our R&D team",
    type: "website",
  },
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-white lg:pt-12 pt-5">
      <Technologys />

      <TechnologyHero
        title={technologyPageData.title}
        subtitle={technologyPageData.subtitle}
        description={technologyPageData.description}
      />

      {/* Technology Grid Section */}
      <section className="my-4 mb-20" id="technology-grid">
        <div className="container mx-auto px-4">
          <TechnologyGrid items={technologyPageData.items} />
        </div>
      </section>
    </main>
  );
}

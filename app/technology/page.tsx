import { type Metadata } from "next";
import TechnologyHero from "@/components/webside/technology/TechnologyHero";
import TechnologyGrid from "@/components/webside/technology/TechnologyGrid";
import technologyPageData from "@/data/technology.data";
import TechnologysHero from "@/components/webside/technology/TechnologysHero";

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
    <main className="min-h-screen bg-white">
      <TechnologysHero />
      {/* Hero Section */}
      <TechnologyHero
        title={technologyPageData.title}
        subtitle={technologyPageData.subtitle}
        description={technologyPageData.description}
      />

      {/* Technology Grid Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <TechnologyGrid items={technologyPageData.items} />
        </div>
      </section>

      {/* CTA Section */}
      <section className=" container mx-auto py-16 bg-linear-to-r from-cyan-50 to-blue-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interested in our research?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Learn more about our innovative technologies and how they&apos;re
            advancing the future of biotechnology.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}

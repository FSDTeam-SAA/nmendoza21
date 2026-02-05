import type { Metadata } from "next";
import { aboutData } from "@/data/about";
import AboutHero from "@/components/webside/about/AboutHero";
import CoreLeadership from "@/components/webside/about/CoreLeadership";
import BoardOfDirectors from "@/components/webside/about/BoardOfDirectors";
import ScientificAdvisors from "@/components/webside/about/ScientificAdvisors";
import JoinMission from "@/components/webside/about/JoinMission";

export const metadata: Metadata = {
  title: "About Us - Our Story & Leadership Team",
  description:
    "Learn about our mission, team, and commitment to advancing biotechnology and drug delivery innovation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero
        title={aboutData.hero.title}
        description={aboutData.hero.description}
      />

      {/* <Stats stats={aboutData.stats} /> */}

      <CoreLeadership
        title={aboutData.coreLeadership.title}
        subtitle={aboutData.coreLeadership.subtitle}
        members={aboutData.coreLeadership.members}
      />

      <BoardOfDirectors
        title={aboutData.boardOfDirectors.title}
        subtitle={aboutData.boardOfDirectors.subtitle}
        members={aboutData.boardOfDirectors.members}
      />

      <ScientificAdvisors
        title={aboutData.scientificAdvisors.title}
        subtitle={aboutData.scientificAdvisors.subtitle}
        members={aboutData.scientificAdvisors.members}
      />

      <JoinMission
        title={aboutData.joinMission.title}
        description={aboutData.joinMission.description}
        ctaText={aboutData.joinMission.ctaText}
        ctaLink={aboutData.joinMission.ctaLink}
      />
    </main>
  );
}

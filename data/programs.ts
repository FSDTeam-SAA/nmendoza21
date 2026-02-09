export interface ProgramHeroData {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  ctaLink: string;
  image: string;
}

export type PipelinePhase =
  | "Discovery"
  | "Pre-Clinical"
  | "Phase I"
  | "Phase II"
  | "Phase III";

export interface PipelineItem {
  id: string;
  title: string;
  description: string;
  image: string;
  activePhase: PipelinePhase;
}

export interface ProgramsPageData {
  hero: ProgramHeroData;
  pipelineTitle: string;
  pipelineSubtitle: string;
  phases: PipelinePhase[];
  items: PipelineItem[];
}

export const programsPageData: ProgramsPageData = {
  hero: {
    title: "Programs &\nApplied Research",
    subtitle: "",
    description:
      "Our technology is built on advanced biotechnology research and data-driven innovation. We use cutting-edge laboratory methods, automation, and analytical tools to deliver accurate, scalable, and reliable solutions. Every process is designed to meet global quality standards while ensuring precision, safety, and consistency across all services.",
    ctaLabel: "Explore Researches",
    ctaLink: "/technology",
    image: "/programs/programhero.jpg",
  },
  pipelineTitle: "Current Active Pipeline",
  pipelineSubtitle:
    "Explore our latest technologies & validated research from our world class R&D team",
  phases: ["Discovery", "Pre-Clinical", "Phase I", "Phase II", "Phase III"],
  items: [
    {
      id: "pipeline-1",
      title: "Needle to oral switch for existing drugs",
      description:
        "We focus on established drugs that are highly effective and safe but only available via needle injection. We use our technology to create custom drug delivery systems enabling  these drugs to be given  via the oral route.",
      image: "/images/technology2.jpg",
      activePhase: "Phase I",
    },
    {
      id: "pipeline-2",
      title: "Create new orally bioavailable therapeutics",
      description:
        "We have a rapidly growing number of industry partnerships with currently 6 of the top 30 Pharma companies and 4 biotech companies with the aim to create new oral blockbuster therapeutics.",
      image: "/images/technology3.jpg",
      activePhase: "Phase I",
    },

  ],
};

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
      title: "Small Molecule Delivery Platform",
      description:
        "Small Molecule Delivery Platform is a pipeline project focused on designing and optimizing delivery systems that improve the stability, targeting, and efficacy of small-molecule therapeutics. The platform aims to enhance bioavailability and reduce off-target effects across multiple disease applications.",
      image: "/images/technology2.jpg",
      activePhase: "Phase I",
    },
    {
      id: "pipeline-2",
      title: "Small Molecule Delivery Platform",
      description:
        "Small Molecule Delivery Platform is a pipeline project focused on designing and optimizing delivery systems that improve the stability, targeting, and efficacy of small-molecule therapeutics. The platform aims to enhance bioavailability and reduce off-target effects across multiple disease applications.",
      image: "/images/technology3.jpg",
      activePhase: "Phase I",
    },
    {
      id: "pipeline-3",
      title: "Small Molecule Delivery Platform",
      description:
        "Small Molecule Delivery Platform is a pipeline project focused on designing and optimizing delivery systems that improve the stability, targeting, and efficacy of small-molecule therapeutics. The platform aims to enhance bioavailability and reduce off-target effects across multiple disease applications.",
      image: "/images/technology4.jpg",
      activePhase: "Phase I",
    },
    {
      id: "pipeline-4",
      title: "Small Molecule Delivery Platform",
      description:
        "Small Molecule Delivery Platform is a pipeline project focused on designing and optimizing delivery systems that improve the stability, targeting, and efficacy of small-molecule therapeutics. The platform aims to enhance bioavailability and reduce off-target effects across multiple disease applications.",
      image: "/images/technology5.jpg",
      activePhase: "Phase I",
    },
  ],
};

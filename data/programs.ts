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
  | "Phase III"
  | "Approval"
  // | "Indication";

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
    title: "Programs",
    subtitle: "",
    description:
      "We strive to advance select high potential next generation oral therapeutics by partnering with leading Pharmaceutical and Biotech companies. To advance our mission to provide patients with the best possible treatment option, we focus on disease areas where oral dosing has a positive impact on the patient’s quality of life and treatment outcome. Our programs have a strong focus on peptide therapeutics and modalities that are traditionally limited to needle administration while requiring frequent long-term dosing.",
    ctaLabel: "Explore Researches",
    ctaLink: "/technology",
    image: "/images/Programs.jpg",
  },
  pipelineTitle: "Current Active Pipeline",
  pipelineSubtitle:
    "Explore our latest technologies & validated research from our world class R&D team",
  phases: ["Discovery", "Pre-Clinical", "Phase I", "Phase II", "Phase III", "Approval"],
  items: [
    {
      id: "pipeline-1",
      title: "Needle to oral switch for existing drugs",
      description:
        "We focus on established drugs that are highly effective and safe but only available via needle injection. We use our technology to create custom drug delivery systems enabling  these drugs to be given  via the oral route.",
      image: "/images/Vivtex-19.jpg",
      activePhase: "Phase I",
    },
    {
      id: "pipeline-2",
      title: "Create new orally bioavailable therapeutics",
      description:
        "We have a rapidly growing number of industry partnerships with currently 6 of the top 30 Pharma companies and 4 biotech companies with the aim to create new oral blockbuster therapeutics.",
      image: "/images/Vivtex-15.jpg",
      activePhase: "Phase II",
    },
        {
      id: "pipeline-3",
      title: "Create new orally bioavailable therapeutics",
      description:
        "We have a rapidly growing number of industry partnerships with currently 6 of the top 30 Pharma companies and 4 biotech companies with the aim to create new oral blockbuster therapeutics.",
      image: "/images/Vivtex-17.jpg",
      activePhase: "Approval",
    },
        {
      id: "pipeline-4",
      title: "Create new orally bioavailable therapeutics",
      description:
        "We have a rapidly growing number of industry partnerships with currently 6 of the top 30 Pharma companies and 4 biotech companies with the aim to create new oral blockbuster therapeutics.",
      image: "/images/Vivtex-18.jpg",
      activePhase: "Approval",
    },

  ],
};

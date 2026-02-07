export interface TechnologyItem {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  date: string;
  badge?: string;
  details: {
    fullDescription: string;
    paperContent: string;
    paperLink?: string;
    image?: string;
    researchAreas?: string[];
    keyFeatures?: string[];
  };
}

export interface TechnologyPageData {
  title: string;
  subtitle: string;
  description?: string;
  items: TechnologyItem[];
}

export const technologyPageData: TechnologyPageData = {
  title: "Scientific Publications",
  subtitle:
    "Explore our latest technologies & validated research from our world-class R&D team",
  description:
    "We combine science, technology, and innovation to power next-generation biotechnology services. Our research foundation drives superior solutions.",
  items: [
    {
      id: "tech-001",
      title:
        "Screening oral drugs for their interactions with the intestinal transportome via porcine tissue explants and machine learning",
      shortDescription:
        "Advanced screening methodology for oral drug interactions using porcine tissue and AI-driven analysis.",
      image: "/images/zetengin.jpg",
      date: "Published 12 Jan, 2024",
      badge: "Featured",
      details: {
        fullDescription:
          "This groundbreaking research demonstrates how our proprietary platform leverages porcine intestinal tissue explants combined with machine learning algorithms to screen oral drug candidates for their interactions with intestinal transporters. This approach significantly improves prediction accuracy of drug absorption and bioavailability compared to traditional methods.",
        paperContent:
          "Our study involved analyzing over 500 drug candidates using intact gastrointestinal tract tissue. We developed a comprehensive database of drug-transporter interactions and trained advanced machine learning models to predict absorption patterns. The results showed 94% correlation with clinical outcomes, substantially outperforming conventional prediction methods. The intact tissue model preserves the complex tissue architecture and multi-cellular interactions that are critical for accurate prediction of in vivo drug behavior.",
        paperLink: "https://example.com/paper-001",
        researchAreas: [
          "Pharmacokinetics",
          "Drug Transport",
          "Machine Learning",
          "Tissue Engineering",
        ],
        keyFeatures: [
          "Intact tissue preservation",
          "High-throughput screening capability",
          "94% clinical correlation rate",
          "Automated data analysis",
          "Predictive AI models",
        ],
      },
    },
    {
      id: "tech-002",
      title:
        "Robotically handled whole-tissue culture system for the screening of oral drug formulations",
      shortDescription:
        "Innovative robotic system for automated whole-tissue culture and drug formulation screening.",
      image: "/images/zetengin.jpg",
      date: "Published 12 Jan, 2024",
      details: {
        fullDescription:
          "We present the first fully automated robotic system capable of handling and culturing intact gastrointestinal tissue for high-throughput drug formulation screening. This breakthrough technology eliminates manual handling errors and enables consistent, reproducible results at scale.",
        paperContent:
          "The robotic system features advanced tissue handling mechanisms, precision environmental controls, and integrated analytics. Our validation studies demonstrate superior consistency and reliability compared to manual methods. The system can process 96 tissue samples simultaneously, reducing analysis time from weeks to days while improving data quality and reducing human error.",
        paperLink: "https://example.com/paper-002",
        researchAreas: [
          "Automation",
          "Tissue Culture",
          "Robotics",
          "Drug Development",
        ],
        keyFeatures: [
          "96-well parallel processing",
          "Precision tissue handling",
          "Real-time monitoring",
          "Automated data collection",
          "Reproducible results",
        ],
      },
    },
    {
      id: "tech-003",
      title:
        "Robotic screening of intestinal drug absorption of oral drug formulations",
      shortDescription:
        "Automated platform for comprehensive intestinal drug absorption analysis.",
      image: "/images/zetengin.jpg",
      date: "Published 12 Jan, 2024",
      details: {
        fullDescription:
          "Our cutting-edge robotic screening platform enables precise measurement of drug absorption across intact intestinal tissue. This technology represents a major advancement in predicting oral drug bioavailability and supporting formulation optimization.",
        paperContent:
          "The platform integrates automated tissue mounting, microfluidic chambers, precision pumping systems, and real-time absorption monitoring. We validated the system against established pharmacokinetic models and demonstrated excellent predictive accuracy. The high-throughput capability allows screening of multiple formulations and conditions simultaneously, accelerating drug development timelines.",
        paperLink: "https://example.com/paper-003",
        researchAreas: [
          "Drug Absorption",
          "Bioavailability",
          "Formulation Science",
          "Analytical Methods",
        ],
        keyFeatures: [
          "Real-time absorption monitoring",
          "Multi-condition analysis",
          "Automated formulation testing",
          "Quantitative bioavailability data",
          "GLP-compliant protocols",
        ],
      },
    },
    {
      id: "tech-004",
      title: "Advanced Molecular Characterization using Mass Spectrometry",
      shortDescription:
        "High-resolution analysis of drug metabolism and tissue interactions.",
      image: "/images/zetengin.jpg",
      date: "Published 15 Dec, 2023",
      details: {
        fullDescription:
          "Leveraging state-of-the-art mass spectrometry techniques, we provide comprehensive molecular characterization of drug metabolism, tissue distribution, and metabolite identification in complex biological systems.",
        paperContent:
          "Our MS/MS platform delivers unparalleled sensitivity and specificity for detecting trace metabolites and drug-tissue interactions. We've developed proprietary protocols for analyzing intact tissue samples, enabling direct measurement of drug processing in physiologically relevant conditions.",
        paperLink: "https://example.com/paper-004",
        researchAreas: [
          "Analytical Chemistry",
          "Metabolomics",
          "Drug Metabolism",
          "Biomarkers",
        ],
        keyFeatures: [
          "Ultra-high resolution analysis",
          "Metabolite identification",
          "Tissue distribution mapping",
          "Real-time monitoring capability",
          "Multi-analyte simultaneous analysis",
        ],
      },
    },
  ],
};

export default technologyPageData;

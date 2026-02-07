export interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  linkLabel: string;
  link: string;
  content?: string[];
}

export interface NewsPageData {
  title: string;
  subtitle: string;
  featured: NewsItem;
  items: NewsItem[];
}

export const newsPageData: NewsPageData = {
  title: "News & Press Release",
  subtitle:
    "Discover the latest breakthroughs in molecular engineering, corporate milestones & our progress in bringing life changing therapeutics to patients",
  featured: {
    id: "featured",
    title: "Robotic screening of intestinal drug absorption",
    description:
      "Our technology is built on advanced biotechnology research and data-driven innovation. We use cutting-edge laboratory methods, automation, and analytical tools to deliver accurate, scalable, and reliable solutions. Every process is designed to meet global quality standards while ensuring precision, safety, and consistency across all services.",
    image: "/images/technology1.jpg",
    date: "Published 24 Nov, 2025",
    linkLabel: "View Full News",
    link: "/news",
    content: [
      "Robotic screening of intestinal drug absorption is designed to transform how early-stage candidates are evaluated for real-world performance. Our platform brings together robotics, microfluidics, and advanced analytical instrumentation to simulate intestinal conditions with high fidelity, enabling rapid profiling of permeability, stability, and transport mechanisms. The approach reduces the reliance on slow, manual assays while maintaining scientific rigor and traceability. By combining continuous data capture with automated quality checks, the system produces reproducible results that support confident decision-making across discovery and development teams. Researchers can monitor kinetics, identify outliers, and compare candidate performance using consistent, standardized protocols that scale without sacrificing accuracy.",
      "We combine science, technology, and innovation to power next-generation biotechnology services. From advanced molecular techniques to intelligent data analysis, our technology enables faster insights, improved accuracy, and sustainable outcomes. Our biotechnology platform is powered by modern technologies that ensure efficiency, reliability, and high performance. By integrating advanced tools and validated processes, we help organizations accelerate research, improve results, and reduce operational complexity. The platform also integrates secure data pipelines, enabling seamless collaboration across multi-site teams and ensuring compliance with documentation requirements. This foundation supports research, diagnostics, and biotherapeutic development with confidence, enabling teams to move from hypothesis to evidence more quickly.",
      "The system’s automation reduces variability by standardizing sample handling, incubation times, and measurement parameters. This consistency allows teams to compare results across campaigns and timeframes, improving the reliability of longitudinal studies. In practice, our approach delivers higher throughput without compromising data integrity, and it provides a clear audit trail for regulatory alignment. Our method adapts to evolving project requirements and can be configured for a range of compound types, from small molecules to complex formulations. The result is a future-ready, scalable solution that empowers innovation across the life sciences industry while maintaining the highest standards of quality and safety.",
    ],
  },
  items: [
    {
      id: "news-1",
      title:
        "Screening oral drugs for their interactions with the intestinal transportome via porcine tissue explants and machine learning",
      description:
        "Shi, Y., Reker, D., Byrne, J.D. et al. Screening oral drugs for their interactions with the intestinal transportome via porcine tissue explants and machine learning. Nat. Biomed. Eng 8, 278–290 (2024).",
      image: "/images/newsInsights.jpg",
      date: "Published 24 Nov, 2024",
    linkLabel: "View Full News",
      link: "https://vivtex.com/wp-content/uploads/2024/05/Screening-oral-drugs-for-their-interactions.pdf",
      content: [
        "Screening oral drugs for their interactions with the intestinal transportome via porcine tissue explants and machine learning",
        "In vitro systems that accurately model in vivo conditions in the gastrointestinal tract may aid the development of oral drugs with greater bioavailability. Here we show that the interaction profiles between drugs and intestinal drug transporters can be obtained by modulating transporter expression in intact porcine tissue explants via the ultrasound-mediated delivery of small interfering RNAs and that the interaction profiles can be classified via a random forest model trained on the drug–transporter relationships. For 24 drugs with well-characterized drug–transporter interactions, the model achieved 100% concordance. For 28 clinical drugs and 22 investigational drugs, the model identified 58 unknown drug–transporter interactions, 7 of which (out of 8 tested) corresponded to drug-pharmacokinetic measurements in mice. We also validated the model’s predictions for interactions between doxycycline and four drugs (warfarin, tacrolimus, digoxin and levetiracetam) through an ex vivo perfusion assay and the analysis of pharmacologic data from patients. Screening drugs for their interactions with the intestinal transportome via tissue explants and machine learning may help to expedite drug development and the evaluation of drug safety.",
      ],
    },
    {
      id: "news-2",
      title:
        "Robotically handled whole-tissue culture system for the screening of oral drug formulations",
      description:
        "von Erlach, T., Saxton, S., Shi, Y. et al. Robotically handled whole-tissue culture system for the screening of oral drug formulations. Nat Biomed Eng 4, 544–559 (2020).",
      image: "/images/newsInsights2.jpg",
      date: "Published 24 Nov, 2020",
      linkLabel: "View Full News",
      link: "https://vivtex.com/wp-content/uploads/2024/05/Robotically-handled-whole-tissue-culture-system.pdf",
      content: [
        "Robotically handled whole-tissue culture system for the screening of oral drug formulations",
        "Monolayers of cancer-derived cell lines are widely used in the modelling of the gastrointestinal (GI) absorption of drugs and in oral drug development. However, they do not generally predict drug absorption in vivo. Here, we report a robotically handled system that uses large porcine GI tissue explants that are functionally maintained for an extended period in culture for the high-throughput interrogation (several thousand samples per day) of whole segments of the GI tract. The automated culture system provided higher predictability of drug absorption in the human GI tract than a Caco-2 Transwell system (Spearman’s correlation coefficients of 0.906 and 0.302, respectively). By using the culture system to analyse the intestinal absorption of 2,930 formulations of the peptide drug oxytocin, we discovered an absorption enhancer that resulted in a 11.3-fold increase in the oral bioavailability of oxytocin in pigs in the absence of cellular disruption of the intestinal tissue. The robotically handled whole-tissue culture system should help advance the development of oral drug formulations and might also be useful for drug screening applications.",
      ],
    },
    {
      id: "news-3",
      title: "Robotic Screening Of Intestinal Drug Absorption",
      description:
        "Basit, A.W., Madla, C.M. & Gavins, F.K.H. Robotic screening of intestinal drug absorption. Nat Biomed Eng 4, 485–486 (2020).",
      image: "/images/newsInsights3.jpg",
      date: "Published 24 Nov, 2020",
      linkLabel: "View Full News",
      link: "https://vivtex.com/wp-content/uploads/2024/05/Robotic-screening-of-intestinal-drug-absorption.pdf",
      content: [
        "A robotic culture system for the high-throughput analysis of drug transport in porcine gastrointestinal tissue explants accurately predicts the absorption of orally taken drugs in the human gut.",
        "We deliver reliable, compliant, and future-ready solutions that empower innovation across the life sciences industry. Our platform is engineered to ensure precision, safety, and consistency across all services and workflows. By incorporating validated processes and automated data validation, we minimize manual errors and improve overall confidence in the results. The system supports rapid reporting and helps teams document critical decisions with clear evidence trails.",
        "The result is a scalable, high-performance screening approach that accelerates lead selection and reduces downstream risk. Teams benefit from faster turnaround, improved insight into mechanism and transport, and a consistent framework for decision-making. This ensures that early-stage research is aligned with real-world performance expectations and that the strongest candidates are advanced with confidence.",
      ],
    },
    {
      id: "news-4",
      title: "Precision Analytics For Drug Discovery",
      description:
        "Smarter analytics workflows accelerate early-stage discovery and reduce turnaround time for complex assays.",
      image: "/images/newsInsights.jpg",
      date: "Published 08 Nov, 2025",
      linkLabel: "View Full News",
      link: "/news",
      content: [
        "Precision analytics for drug discovery brings a new layer of clarity to early-stage research by combining robust experimentation with intelligent data processing. Our workflows capture high-resolution results across large datasets while maintaining tight control over experimental variables. By standardizing collection and normalization steps, the system reduces noise and improves the reliability of conclusions drawn from complex assays.",
        "Our analytics stack combines high-throughput experimentation with intelligent data pipelines to surface actionable insights faster. Teams gain higher confidence in lead selection and can scale experiments without compromising data integrity. Automated quality checks and anomaly detection help teams identify outliers early and focus attention on meaningful signals rather than chasing inconsistent results.",
        "These improvements translate into faster decision cycles and more confident progression for candidates entering further development stages. Researchers can compare results across projects, integrate external datasets when needed, and produce consistent reports for stakeholders. The platform enables data-driven prioritization, improves resource allocation, and supports long-term program success by ensuring that insights are both reliable and reproducible.",
      ],
    },
    {
      id: "news-5",
      title: "Automation In Translational Research",
      description:
        "Automation reduces variability and improves consistency in translational research workflows.",
      image: "/images/newsInsights2.jpg",
      date: "Published 02 Nov, 2025",
      linkLabel: "View Full News",
      link: "/news",
      content: [
        "A robotic culture system for the high-throughput analysis of drug transport in porcine gastrointestinal tissue explants accurately predicts the absorption of orally taken drugs in the human gut.",
        "We integrate validated automation tools that streamline sample handling, analysis, and reporting across labs. This reduces operational complexity and improves throughput for clinical and preclinical research teams. Automated scheduling and monitoring allow for continuous operation, while built-in safeguards detect deviations before they impact results.",
        "By minimizing variability and enhancing efficiency, automation supports stronger translational insights and shortens the path from discovery to clinical relevance. Teams gain the ability to scale programs without scaling risk, and they can maintain high standards of quality even as throughput increases. This creates a stable foundation for long-term innovation and more predictable outcomes in translational pipelines.",
      ],
    },
  ],
};

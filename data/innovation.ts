export interface InnovationFeatureData {
  featured: {
    label: string;
    date: string;
    title: string;
    description: string;
    author: string;
    authorRole: string;
    authorAvatar: string;
    linkLabel: string;
    link: string;
  };
  upcoming: {
    label: string;
    title: string;
    description: string;
    linkLabel: string;
    link: string;
  };
}

export interface InnovationNewsItem {
  id: string;
  title: string;
  titile2: string;
  description: string;
  image: string;
  linkLabel: string;
  link: string;
  date: string;
  content?: string[];
}

export interface InnovationCommunityData {
  title: string;
  description: string;
  bullets: string[];
}

export interface InnovationPageData {
  heroTitle: string;
  heroSubtitle: string;
  feature: InnovationFeatureData;
  latestNewsTitle: string;
  latestNews: InnovationNewsItem[];
  community: InnovationCommunityData;
}

export const innovationPageData: InnovationPageData = {
  heroTitle: "Innovation & Engagement",
  heroSubtitle:
    "Pushing the boundary of molecular science through collaborative research",
  feature: {
    featured: {
      label: "Featured Newsletter",
      date: "Published 24 Nov, 2025",
      title: "Robotic screening of intestinal drug absorption",
      description:
        "Our technology is built on advanced biotechnology research and data-driven innovation. We use cutting-edge laboratory methods, automation, and analytical tools to deliver accurate, scalable, and reliable solutions. Every process is designed to meet global quality standards while ensuring precision, safety, and consistency across all services.",
      author: "Andres de Costa",
      authorRole: "Chief Science Officer",
      authorAvatar: "/images/technology1.jpg",
      linkLabel: "Read Full Issue",
      link: "/news",
    },
    upcoming: {
      label: "Upcoming Publication",
      title: "Small Molecule Delivery Platform",
      description:
        "Small Molecule Delivery Platform is a pipeline project focused on designing and optimizing delivery systems that improve the stability, targeting, and efficacy of small-molecule therapeutics.",
      linkLabel: "Read Full Issue",
      link: "/news",
    },
  },
  latestNewsTitle: "Latest News Updates",
  latestNews: [
    {
      id: "news-1",
      titile2: "Newsletter Update box",
      title: "Robotic Screening Of Intestinal Drug Absorption",
      description:
        "Of Course The Fugit Sound Is Very Watery, And Where There Are Boats, Today...",
      image: "/images/innovation2.jpg",
      linkLabel: "View Details",
      link: "/news",
      date: "Published 24 Nov, 2025",
      content: [
        "Robotic screening of intestinal drug absorption is designed to transform how early-stage candidates are evaluated for real-world performance. Our platform brings together robotics, microfluidics, and advanced analytical instrumentation to simulate intestinal conditions with high fidelity, enabling rapid profiling of permeability, stability, and transport mechanisms.",
        "We combine science, technology, and innovation to power next-generation biotechnology services. From advanced molecular techniques to intelligent data analysis, our technology enables faster insights, improved accuracy, and sustainable outcomes. Our biotechnology platform is powered by modern technologies that ensure efficiency, reliability, and high performance.",
        "The system’s automation reduces variability by standardizing sample handling, incubation times, and measurement parameters. This consistency allows teams to compare results across campaigns and timeframes, improving the reliability of longitudinal studies. In practice, our approach delivers higher throughput without compromising data integrity.",
      ],
    },
    {
      id: "news-2",
      titile2: "Scientific Conferences",
      title: "Precision Analytics For Drug Discovery",
      description:
        "Smarter analytics workflows accelerate early-stage discovery and reduce turnaround time for complex assays.",
      image: "/images/innovation1.jpg",
      linkLabel: "View Details",
      link: "/news",
      date: "Published 18 Nov, 2025",
      content: [
        "Precision analytics for drug discovery brings a new layer of clarity to early-stage research by combining robust experimentation with intelligent data processing. Our workflows capture high-resolution results across large datasets while maintaining tight control over experimental variables.",
        "Our analytics stack combines high-throughput experimentation with intelligent data pipelines to surface actionable insights faster. Teams gain higher confidence in lead selection and can scale experiments without compromising data integrity. Automated quality checks and anomaly detection help teams identify outliers early.",
        "These improvements translate into faster decision cycles and more confident progression for candidates entering further development stages. Researchers can compare results across projects, integrate external datasets when needed, and produce consistent reports for stakeholders.",
      ],
    },
    {
      id: "news-3",
      title: "Automation In Translational Research",
      titile2: "Scientific Community & Engagement",
      description:
        "Automation reduces variability and improves consistency in translational research workflows.",
      image: "/images/innovation3.jpg",
      linkLabel: "View Details",
      link: "/news",
      date: "Published 10 Nov, 2025",
      content: [
        "Automation in translational research is essential for improving consistency, reducing manual workload, and increasing throughput. Our approach integrates validated robotics and standardized workflows that coordinate sample handling, processing, and analysis with high precision.",
        "We integrate validated automation tools that streamline sample handling, analysis, and reporting across labs. This reduces operational complexity and improves throughput for clinical and preclinical research teams. Automated scheduling and monitoring allow for continuous operation.",
        "By minimizing variability and enhancing efficiency, automation supports stronger translational insights and shortens the path from discovery to clinical relevance. Teams gain the ability to scale programs without scaling risk, and they can maintain high standards of quality even as throughput increases.",
      ],
    },
    {
      id: "news-4",
      titile2: "Webinars box",
      title: "Automation In Translational Research",
      description:
        "Automation reduces variability and improves consistency in translational research workflows.",
      image: "/images/innovation4.jpg",
      linkLabel: "View Details",
      link: "/news",
      date: "Published 10 Nov, 2025",
      content: [
        "Automation in translational research is essential for improving consistency, reducing manual workload, and increasing throughput. Our approach integrates validated robotics and standardized workflows that coordinate sample handling, processing, and analysis with high precision.",
        "We integrate validated automation tools that streamline sample handling, analysis, and reporting across labs. This reduces operational complexity and improves throughput for clinical and preclinical research teams. Automated scheduling and monitoring allow for continuous operation.",
        "By minimizing variability and enhancing efficiency, automation supports stronger translational insights and shortens the path from discovery to clinical relevance. Teams gain the ability to scale programs without scaling risk, and they can maintain high standards of quality even as throughput increases.",
      ],
    },
  ],
  community: {
    title: "Fostering a Global Scientific Community",
    description:
      "Innovation doesn’t happen in a vacuum. We actively engage with academia, students, and independent researchers to bridge the gap between theoretical science and life-saving applications.",
    bullets: [
      "Annual Post-Doctoral Research Grants",
      "K-12 Science Mentorship Program",
      "Open Access Laboratory Initiatives",
    ],
  },
};

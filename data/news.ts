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
      title: "Robotic Screening Of Intestinal Drug Absorption",
      description:
        "Of Course The Fugit Sound Is Very Watery, And Where There Are Boats, Today...",
      image: "/images/newsInsights.jpg",
      date: "Published 24 Nov, 2025",
      linkLabel: "View Details",
      link: "/news",
      content: [
        "This update highlights the next milestone in robotic screening for intestinal drug absorption, with expanded workflows that enable deeper insights into compound behavior. Our platform automates sample preparation, controls microenvironmental conditions, and captures multi-modal measurements to characterize permeability and transport pathways with precision. Researchers benefit from standardized conditions that eliminate variability, providing reliable comparisons across large candidate sets. The system integrates advanced analytics to identify patterns, flag anomalies, and generate clear summaries that are easy to interpret for cross-functional teams.",
        "We leverage advanced biotech tools and intelligent systems to deliver precise, secure, and scalable services. Designed for performance and compliance, our platform supports innovation across research, diagnostics, and development. By integrating automation, validated processes, and data intelligence, we help organizations accelerate discovery and improve outcomes while reducing operational complexity. The workflow supports rapid iteration, enabling teams to adjust assay parameters and immediately evaluate how those changes impact results without compromising traceability.",
        "Beyond throughput, the platform is built for reliability. Calibration routines, automated controls, and continuous monitoring ensure accuracy and reproducibility across each run. Data is stored and organized to support collaboration across sites, with clear provenance and quality indicators that simplify reporting. This approach reduces time-to-decision, improves confidence in lead selection, and provides a robust foundation for subsequent in vivo and clinical studies. Ultimately, the technology empowers teams to make smarter, faster choices while maintaining the highest standards of quality.",
      ],
    },
    {
      id: "news-2",
      title: "Robotic Screening Of Intestinal Drug Absorption",
      description:
        "Of Course The Fugit Sound Is Very Watery, And Where There Are Boats, Today...",
      image: "/images/newsInsights2.jpg",
      date: "Published 24 Nov, 2025",
      linkLabel: "View Details",
      link: "/news",
      content: [
        "This release focuses on improved analytical depth in robotic screening, adding enhanced sampling strategies and refined transport modeling to better characterize absorption behavior. By combining high-throughput automation with smart data pipelines, the platform captures subtle shifts in compound permeability and stability that might be missed in conventional assays. The result is a more comprehensive picture of candidate performance, enabling researchers to distinguish between formulation effects, molecular properties, and experimental variability.",
        "Our technology ecosystem integrates advanced biotechnology methods, automation, and analytics to deliver reliable, compliant, and future-ready solutions. Focused on quality and reproducibility, we support teams with scalable platforms that adapt to evolving research needs. The system integrates audit-ready data handling, enabling teams to meet documentation standards without adding manual overhead. Dashboards provide rapid visibility into trends and support scenario-based analysis for early go/no-go decisions.",
        "By standardizing conditions across experiments and applying consistent quality controls, the platform ensures that results remain comparable over time. Teams can scale experiments quickly, adjust to new compound libraries, and maintain confidence in their outcomes. This combination of rigor, speed, and flexibility reduces project risk and supports faster progression from discovery to development, ensuring that promising candidates move forward with clear, data-driven justification.",
      ],
    },
    {
      id: "news-3",
      title: "Robotic Screening Of Intestinal Drug Absorption",
      description:
        "Of Course The Fugit Sound Is Very Watery, And Where There Are Boats, Today...",
      image: "/images/newsInsights3.jpg",
      date: "Published 24 Nov, 2025",
      linkLabel: "View Details",
      link: "/news",
      content: [
        "In this update, we expand the robotic screening workflow to include optimized conditions that better emulate physiological environments, improving predictive relevance for intestinal absorption. The platform’s automation ensures uniform sample handling and precise timing, while integrated sensors capture critical metrics for transport and stability. This combination provides a strong foundation for comparing candidate performance across diverse compound sets with minimal variability.",
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
      linkLabel: "View Details",
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
      linkLabel: "View Details",
      link: "/news",
      content: [
        "Automation in translational research is essential for improving consistency, reducing manual workload, and increasing throughput. Our approach integrates validated robotics and standardized workflows that coordinate sample handling, processing, and analysis with high precision. This ensures that critical steps are executed in the same way every time, producing data that is trustworthy and comparable across studies.",
        "We integrate validated automation tools that streamline sample handling, analysis, and reporting across labs. This reduces operational complexity and improves throughput for clinical and preclinical research teams. Automated scheduling and monitoring allow for continuous operation, while built-in safeguards detect deviations before they impact results.",
        "By minimizing variability and enhancing efficiency, automation supports stronger translational insights and shortens the path from discovery to clinical relevance. Teams gain the ability to scale programs without scaling risk, and they can maintain high standards of quality even as throughput increases. This creates a stable foundation for long-term innovation and more predictable outcomes in translational pipelines.",
      ],
    },
  ],
};

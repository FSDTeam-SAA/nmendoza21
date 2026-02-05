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
  description: string;
  image: string;
  linkLabel: string;
  link: string;
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
      title: "Robotic Screening Of Intestinal Drug Absorption",
      description:
        "Of Course The Fugit Sound Is Very Watery, And Where There Are Boats, Today...",
      image: "/images/newsInsights.jpg",
      linkLabel: "View Details",
      link: "/news",
    },
    {
      id: "news-2",
      title: "Robotic Screening Of Intestinal Drug Absorption",
      description:
        "Of Course The Fugit Sound Is Very Watery, And Where There Are Boats, Today...",
      image: "/images/newsInsights2.jpg",
      linkLabel: "View Details",
      link: "/news",
    },
    {
      id: "news-3",
      title: "Robotic Screening Of Intestinal Drug Absorption",
      description:
        "Of Course The Fugit Sound Is Very Watery, And Where There Are Boats, Today...",
      image: "/images/newsInsights3.jpg",
      linkLabel: "View Details",
      link: "/news",
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

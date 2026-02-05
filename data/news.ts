export interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  linkLabel: string;
  link: string;
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
    },
  ],
};

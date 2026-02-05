export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks?: SocialLink[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface AboutData {
  hero: {
    title: string;
    description: string;
    backgroundImage?: string;
  };
  stats: Stat[];
  coreLeadership: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  boardOfDirectors: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  scientificAdvisors: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  joinMission: {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  };
}

export const aboutData: AboutData = {
  hero: {
    title: "Our Story",
    description:
      "Our website provides advanced services for rheumatic and molecular-level research and analysis, with AI-driven standards, researchers and analysts can open new doors with tools and expertise for molecular modeling, simulation, visualization, and other tasks. Industry-first understanding clarifies development by managing molecule activities, our products help to shorten clinical trials and discover original drugs.",
    backgroundImage: "/images/bannerbg.jpg",
  },
  stats: [
    {
      value: "45+",
      label: "Patents Filed",
    },
    {
      value: "295",
      label: "Lead Formulations Identified",
    },
    {
      value: "120+",
      label: "Peer-Review Papers",
    },
    {
      value: "24",
      label: "Institutional Partnerships",
    },
  ],
  coreLeadership: {
    title: "Core Leadership",
    subtitle: "World-class experts leading the charge in biotechnology",
    members: [
      {
        id: "maureen-deehan",
        name: "Maureen Deehan",
        role: "Chief Executive Officer",
        image: "/about/chief-officer.jpg",
        bio: "Maureen brings over 20 years of executive leadership experience in biotechnology and pharmaceutical industries. She has led multiple companies through successful clinical trials and regulatory approvals, with a focus on innovative drug delivery systems.",
        socialLinks: [
          { platform: "LinkedIn", url: "#" },
          { platform: "Twitter", url: "#" },
        ],
      },
      {
        id: "thomas-von-erlach",
        name: "Thomas von Erlach",
        role: "Chief Scientific Officer",
        image: "/about/scientificofficer.jpg",
        bio: "Dr. von Erlach co-founded Vivtex and joined as its Chief Scientific Officer when Vivtex was formed as a MIT spin-off in 2018. Prior to that he led the interdisciplinary efforts around gastroretentive devices for oral drug delivery collaborating with MIT groups at Harvard, Brigham and Women's Hospital, and the lab of Giovanni Traverso at MIT. Thomas obtained a PhD from Imperial College London in Bioengineering and BSc and MSc in Biochemistry and Biotechnology from ETH in Switzerland. His research interests include advanced in vitro model systems for drug and medical device testing. His work has been published in several high impact journals, including Nature Materials, Nature Biomedical Engineering and Nature Communications.",
        socialLinks: [
          { platform: "LinkedIn", url: "#" },
          { platform: "Scholar", url: "#" },
        ],
      },
      {
        id: "james-wright",
        name: "James Wright",
        role: "Senior Scientific Advisor",
        image: "/about/scientificadvisor.jpg",
        bio: "Dr. Wright is a renowned researcher with expertise in molecular biology and drug discovery. His work has been instrumental in developing novel therapeutic approaches for chronic diseases.",
        socialLinks: [{ platform: "LinkedIn", url: "#" }],
      },
    ],
  },
  boardOfDirectors: {
    title: "Board of Directors",
    subtitle: "See our Co-Founders",
    members: [
      {
        id: "robert-langer",
        name: "Robert Langer",
        role: "Co-Founder",
        image: "/about/co-founder.jpg",
        bio: "Robert Langer is one of the most cited researchers in history, with over 1,400 patents. He is a Institute Professor at MIT and has founded numerous successful biotechnology companies. His pioneering work in drug delivery and tissue engineering has revolutionized modern medicine.",
        socialLinks: [
          { platform: "LinkedIn", url: "#" },
          { platform: "Scholar", url: "#" },
        ],
      },
      {
        id: "giovanni-traverso",
        name: "Giovanni Traverso",
        role: "Co-founder",
        image: "/about/co-founder2.jpg",
        bio: "Dr. Traverso is an Associate Professor at MIT and a gastroenterologist at Brigham and Women's Hospital. His research focuses on developing new technologies for drug delivery and diagnostics, with particular emphasis on gastrointestinal applications.",
        socialLinks: [
          { platform: "LinkedIn", url: "#" },
          { platform: "Scholar", url: "#" },
        ],
      },
      {
        id: "jack-barbut",
        name: "Jack Barbut",
        role: "Investor",
        image: "/about/investor.jpg",
        bio: "Jack Barbut is a seasoned investor and advisor in the biotechnology sector. With decades of experience in venture capital and strategic investments, he provides valuable guidance on business development and growth strategies.",
        socialLinks: [{ platform: "LinkedIn", url: "#" }],
      },
    ],
  },
  scientificAdvisors: {
    title: "Scientific Advisors",
    subtitle: "World-renowned advisors guide our research and development",
    members: [
      {
        id: "tomi-sawyer",
        name: "Tomi Sawyer",
        role: "Peptide Therapeutics Expert",
        image: "/about/scientificadvisor.jpg",
        bio: "Dr. Sawyer is a leading authority in peptide chemistry and drug design. With over 30 years of experience, he has contributed to the development of multiple FDA-approved peptide therapeutics and holds numerous patents in the field.",
        socialLinks: [
          { platform: "LinkedIn", url: "#" },
          { platform: "Scholar", url: "#" },
        ],
      },
      {
        id: "ivor-elrifi",
        name: "Ivor Elrifi",
        role: "Translational Advisor",
        image: "/about/scientificadvisor.jpg",
        bio: "Ivor Elrifi brings extensive expertise in translating scientific discoveries into clinical applications. His work bridges the gap between laboratory research and patient care, ensuring that innovative technologies reach those who need them most.",
        socialLinks: [{ platform: "LinkedIn", url: "#" }],
      },
    ],
  },
  joinMission: {
    title: "Join Our Mission",
    description:
      "We are always looking for curious minded and bold partners to help us to shape up the future of medicine.",
    ctaText: "Contact Us",
    ctaLink: "/contact",
  },
};

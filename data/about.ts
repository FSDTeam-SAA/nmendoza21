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
        id: "thomas-von-erlach",
        name: "Thomas von Erlach",
        role: "Chief Executive Officer",
        image: "/about/scientificofficer.jpg",
        bio: "Thomas has been the Chief Executive Officer of Vivtex since 2026. Previously, Thomas served as the Chief Scientific Officer of Vivtex where he has been leading and building the Vivtex Technology from an initial concept to a platform that created clinical stage drug products. Thomas brings over a decade of leadership in the field of oral drug delivery with strong expertise in pharma co-development partnerships. Previously, he led an interdisciplinary team in the Laboratory of Prof. Robert Langer and Prof. Giovanni Traverso at MIT as a Postdoctoral Research Fellow. He obtained a PhD from Imperial College London in Bioengineering and BSc and MSc in Biochemistry and Biotechnology from ETH in Switzerland where we graduated receiving the Willi-Studer award for academic excellence.",
        socialLinks: [
          { platform: "LinkedIn", url: "#" },
          { platform: "Scholar", url: "#" },
        ],
      },
      {
        id: "lena-fischer",
        name: "Lena FischerSenior",
        role: "Vice President of Finance & Operations",
        image: "/about/chief-officer.jpg",
        bio: "Lena is a seasoned finance leader with a passion for science and operational excellence. She has more than 15 years of deep expertise in big pharma and biotech operations, with a proven ability to build and scale biotech companies while developing strong, trusted networks across the industry.Her experience spans managing complex, global, and cross-functional organizations, partnering effectively with executive teams, boards, venture capital firms, auditors, and financial institutions. Before joining Vivtex, Lena was VP of Finance & Operations at AIRNA, an emerging RNA editing company. Prior to that, she was instrumental in setting up and managing finance & operations for a number of biotech companies. ",
        socialLinks: [
          { platform: "LinkedIn", url: "#" },
          { platform: "Twitter", url: "#" },
        ],
      },

      {
        id: "per-larsson",
        name: "Per Larsson",
        role: "Senior Scientific Advisor",
        image: "/about/per-larsson.jpg",
        bio: "Per Larsson has been working with modeling and simulation, as well as machine learning and AI methods, to understand the behavior of orally administered drugs for several years. In particular, his work has focused on how to make the design of oral peptide formulations more knowledge-based and how to best interface computational methods with experimental studies for drug delivery.",
        socialLinks: [{ platform: "LinkedIn", url: "#" }],
      },

      {
        id: "james-wright",
        name: "James Wright",
        role: "Senior Scientific Advisor",
        image: "/about/scientificadvisor.jpg",
        bio: "Dr. Wright joined Vivtex in 2018 as a core member of the Vivtex Executive Management Team and Senior Scientific Advisor. Prior to that he held various executive and leadership positions in pharma and biotech companies, including Vice President of Development at Infinity Pharmaceuticals, Inc., Vice President of Pharmaceutical Development at Millennium Pharmaceuticals and Senior Vice President of Development at Alkermes plc. In addition, he was a Distinguished Scientist at Boehringer Ingelheim Pharmaceuticals. Furthermore, Dr Wright was co-Founder and Chairman of the Scientific & Clinical Advisory Board of the drug delivery company Civitas Therapeutics that was sold for $525 million in 2014. He received his Ph.D. in Pharmacy from the University of Wisconsin and B.A. and degrees in Biology and Chemistry from the University of California, Santa Barbara.",
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
        bio: "Dr. Langer is the David H. Koch Institute Professor at MIT. He is heralded as one of the most prolific inventors in the history of medicine. He has written over 1,400 articles and has over 1,300 issues and pending patents worldwide. Dr. Langer’s patents have been licensed or sublicensed to over 350 pharmaceutical, chemical, biotechnology and medical device companies. He is the most cited engineer in history and is co-founder of over 40 biotech companies. He is a co-founder of Vivtex and also serves as head of its board of directors.",
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
        bio: "Dr. Traverso is a Professor in the Department of Mechanical Engineering at MIT and a gastroenterologist at Brigham and Women’s Hospital, Harvard Medical School. He received his BA from Trinity College, University of Cambridge, UK, and his PhD at Johns Hopkins University. He subsequently completed medical school at the University of Cambridge, UK. He is a renowned expert in oral drug delivery and co-founder of several biotech companies. He is a co-founder of Vivtex and serves as a board member.",
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
        bio: "Mr. Barbut is a 30+ years life science executive with extensive experience in management, R&D, business development and sales. He served as CEO of Novimmune from 2000-2016 where he built the organization from ground up to become a 120 employee fully integrated Swiss biotech corporation specializing in Immunology and Immunology-Oncology. Previously, he served as CEO of Synarc, a San Francisco based, global 150 employee, centralized imaging center, for clinical research. He was also formerly the founder, Vice Chairman and President of Chrysalis, a Nasdaq traded global full service CRO. Jack is a Swiss citizen and graduate of EPFL, Lausanne, in System Engineering.",
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
        image: "/about/tomi.jpg",
        bio: "Tomi is Chief Drug Hunter & President of Maestro Therapeutics, a consulting/advisory enterprise supporting peptide drug discovery, which he founded in 2019. Recently, Tomi founded the Peptide Drug Hunting Consortium which is committed to strengthening the interface of science and business for peptide drug discovery worldwide to support biotech, pharma, academia, contract R&D organizations, service providers and investors. Over the past 40+ years in pharma and biotech, Tomi’s career has included being a Distinguished Scientist at Merck, Chief Scientific Officer at Aileron, Senior Vice-President of Drug Discovery at Ariad (now Takeda), and Senior Director of Chemical Sciences at Pfizer (as well as scientific leadership positions at its legacy companies, Upjohn and Parke-Davis). He is credited with several molecules which have advanced into clinical development and/or achieved FDA approval. He has >660 scientific publications, patents, and presentations. Tomi also served as past-President of the American Peptide Society and was co-Chair of the Eighteenth American Peptide Symposium (Boston). Tomi holds a Ph.D. in Chemistry from the University of Arizona, and a B.Sc. in Chemistry from Minnesota State University Moorhead.",
        socialLinks: [
          { platform: "LinkedIn", url: "#" },
          { platform: "Scholar", url: "#" },
        ],
      },
      {
        id: "ivor-elrifi",
        name: "Ivor Elrifi",
        role: "Translational Advisor",
        image: "/about/ivor.jpg",
        bio: "Dr. Ivor Elrifi is CEO of a publicly traded biotech company. Prior to that, he was the global chair of Cooley LLP’s patent counseling and prosecution practice group. His practice included patent prosecution, litigation, arbitration, licensing and transactional work with a focus on novel therapeutic treatments, biotechnology, genetics, diagnostics, biomarkers, drug formulations and medical devices. Dr. Elrifi counseled clients worldwide in developing and implementing patent strategies and in the prosecution, licensing and enforcement of patents. He has extensive experience in advising clients on transactional work and regularly counseled clients with respect to investments, mergers and acquisitions. He also advised plaintiffs and defendants in patent litigation and arbitration cases. Before joining Cooley, Dr. Elrifi was co-chair and section manager of Mintz Levin’s intellectual property practice and a member of the firm’s management committee. Earlier in his career, he served as patent counsel and then general counsel and vice president for CytoTherapeutics in Providence, Rhode Island, and as patent counsel to Modex Therapeutics in Lausanne, Switzerland. He has spoken at numerous international conferences, and he has written numerous articles for leading legal and scientific publications. Dr. Elrifi is an elected member of the Fellows of the American Bar Foundation, a global honorary society of attorneys, judges, law faculty and legal scholars. He received his J.D. from Osgoode Hall Law School, York University in 1989 and Ph.D. from Queen’s University at Kingston, Biology in 1986, and is admitted to practice law in California, Massachusetts, New York, Ontario, Canada.",
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

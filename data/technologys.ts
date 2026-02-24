export interface TechnologySectionItem {
  id: string;
  label: string;
  heading: string;
  description: string;
  mediaSrc?: string;
  mediaAlt: string;
  image?: string;
}

export interface TechnologySectionData {
  title: string;
  subtitle: string;
  items: TechnologySectionItem[];
  ctaLabel: string;
}

export const technologysData: TechnologySectionData = {
  title: "Technology",
  subtitle: "Understand our processes",
  ctaLabel: "Read More ....",
  items: [
    {
      id: "tech-gi-models",
      label: "GI Models",
      heading: "Embrace Nature's Complexity",
      description:
        "We capture the biological complexity of the Gastrointestinal tract by using a new robotic organ interfacing technology (GI-ORIS) that enables us to rapidly interrogate the GI tract in the lab on an organ level based on fully automated high throughput screening experiments.",
      // mediaSrc: "/animations/Animation2.mp4",
      image:'/gemini-2.5-flash-image_I_want_a_picture_of_the_gastrointestinal_track_at_a_microscopical_level-2.jpg',    
      mediaAlt: "GI models technology",
    },
    {
      id: "Excipient-Library",
      label: "Excipient Library",
      heading: "Explore Chemical Diversity",
      description:
        "By high throughput testing, we can systematically identify a wide range of chemicals and combinations to discover unique interactions enabling drugs to overcome the GI barriers.",
      // mediaSrc: "/animations/Animation3.mp4",
      image:'/Pippeting.png',
      mediaAlt: "Excipient Library",
    },
    {
      id: "tech-xx-ai",
      label: "XX / AI",
      heading: "Leverage Technology",
      description:
        "The use of AI and computational tools enable us to leverage our vast amount of experimental data in a way that allows us to rapidly predict interactions and ultimately ways to enable drugs to be absorbed in the GI tract as well as engineer new therapeutics on a molecular level to become the best possible oral drugs.",
      mediaSrc: "/animations/Animation1.mp4",
      mediaAlt: "Data intelligence platform ",
    },
    {
      id: "tech-tissue-change",
      label: "Tissue Change",
      heading: "Create Next Generation Oral Therapeutics",
      description:
        "We use our platform to ultimately create oral products that capture all the technology into a simple pill or tablets with convenient dosing requirements.",
      // mediaSrc: "/animations/Animation4.mp4",
      image:'/pill.jpg',
      mediaAlt: "Tissue change technology",
    },
  ],
};

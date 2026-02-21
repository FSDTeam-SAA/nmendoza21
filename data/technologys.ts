export interface TechnologySectionItem {
	id: string;
	label: string;
	heading: string;
	description: string;
	mediaSrc: string;
	mediaAlt: string;
	mediaType: "image";
}

export interface TechnologySectionData {
	title: string;
	subtitle: string;
	items: TechnologySectionItem[];
	ctaLabel: string;
}

export const technologysData: TechnologySectionData = {
	title: "Technology",
	subtitle: "Explore our latest technologies",
	ctaLabel: "Read More ....",
	items: [
		{
			id: "tech-gi-models",
			label: "GI Models",
			heading: "Enhance nature’s complexity",
			description:
				"We build models that reflect real biology and improve the reliability of experimental outcomes.",
			mediaSrc: "/images/Vivtex-15.jpg",
			mediaAlt: "GI models technology",
			mediaType: "image",
		},
		{
			id: "Excipient-Library",
			label: "Excipient Library",
			heading: "Explore Chemical Diversity",
			description:
				"High-accuracy visal understanding enables smarter automation and faster decisions.",
			mediaSrc: "/images/Vivtex-11.jpg",
			mediaAlt: "Excipient Library",
			mediaType: "image",
		},
		{
			id: "tech-xx-ai",
			label: "XX / AI",
			heading: "Leverage Technology",
			description:
				"We turn complex datasets into clear, actionable insights with scalable pipelines.",
			mediaSrc: "/images/Vivtex-14.jpg",
			mediaAlt: "Data intelligence platform ",
			mediaType: "image",
		},
		{
			id: "tech-tissue-change",
			label: "Tissue Change",
			heading: "Create Next generation oral therapeutics enabled instead of create?",
			description:
				"Automation frameworks reduce manual work while improving speed and consistency.",
			mediaSrc: "/images/tissue-change.jpg",
			mediaAlt: "Tissue change technology",
			mediaType: "image",
		},
		{
			id: "tech-automation",
			label: "proprietary automation ",
			heading: "Provide patients with the best care",
			description:
				"Automation frameworks reduce manual work while improving speed and consistency.",
			mediaSrc: "/images/Vivtex-18.jpg",
			mediaAlt: "Automation systems",
			mediaType: "image",
		},
	],
};



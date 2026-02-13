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
			heading: "Enhance nature's complexity",
			description:
				"We build models that reflect real biology and improve the reliability of experimental outcomes.",
			mediaSrc: "/images/technology2.jpg",
			mediaAlt: "GI models technology",
			mediaType: "image",
		},
		{
			id: "tech-ai-vision",
			label: "AI Vision",
			heading: "Intelligent visual systems",
			description:
				"High-accuracy visual understanding enables smarter automation and faster decisions.",
			mediaSrc: "/images/technology4.jpg",
			mediaAlt: "AI vision system",
			mediaType: "image",
		},
		{
			id: "tech-data-intelligence",
			label: "Data Intelligence",
			heading: "Smarter insights from data",
			description:
				"We turn complex datasets into clear, actionable insights with scalable pipelines.",
			mediaSrc: "/images/technology3.jpg",
			mediaAlt: "Data intelligence platform",
			mediaType: "image",
		},
		{
			id: "tech-automation",
			label: "Automation",
			heading: "Streamline your operations",
			description:
				"Automation frameworks reduce manual work while improving speed and consistency.",
			mediaSrc: "/images/technologys.jpg",
			mediaAlt: "Automation systems",
			mediaType: "image",
		},
	],
};

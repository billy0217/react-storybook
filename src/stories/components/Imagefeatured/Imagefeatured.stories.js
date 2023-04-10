import { Imagefeatured } from "./Imagefeatured";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Compoments/Imagefeatured',
	component: Imagefeatured,
	tags: ['autodocs'],
};

export const fullWidth = {
	args: {
		fullwidth: true,
		theme: 'light',
		image: {
			webp: 'https://picsum.photos/1000/1000.webp',
			src: 'https://picsum.photos/1000/1000.jpg',
			alt: 'Placeholder',
			crop: "square"
		},
		heading: "Image Featured",
		align: 'left',
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur urna ligula",
		link: {
			src: "https://www.google.com/",
			text: "Google",
			targert: true,
		}
		
	},
};

export const fixWidth = {
	args: {
		fullwidth: false,
		theme: 'dark',
		image: {
			webp: 'https://picsum.photos/1000/1000.webp',
			src: 'https://picsum.photos/1000/1000.jpg',
			alt: 'Placeholder',
			crop: "square"
		},
		heading: "Image Featured",
		align: 'left',
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur urna ligula",
		
	},
};

export const alignLeft = {
	args: {
		fullwidth: true,
		theme: 'light',
		image: {
			webp: 'https://picsum.photos/1000/1000.webp',
			src: 'https://picsum.photos/1000/1000.jpg',
			alt: 'Placeholder',
			crop: "square"
		},
		heading: "Image Featured",
		align: 'left',
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur urna ligula",
		link: {
			src: "https://www.google.com/",
			text: "Google",
			targert: true,
		}
		
	},
};

export const alignRight = {
	args: {
		fullwidth: true,
		theme: 'light',
		image: {
			webp: 'https://picsum.photos/1000/1000.webp',
			src: 'https://picsum.photos/1000/1000.jpg',
			alt: 'Placeholder',
			crop: "square"
		},
		heading: "Image Featured",
		align: 'right',
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur urna ligula",
		link: {
			src: "https://www.google.com/",
			text: "Google",
			targert: true,
		}
		
	},
};

/*
export const fullwidth = {
	args: {
		webp: 'https://picsum.photos/1000/1000.webp',
		src: 'https://picsum.photos/1000/1000.jpg',
		alt: 'Placeholder',
		crop: "square"
	},
};*/

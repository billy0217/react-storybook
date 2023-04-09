import { Image } from "./Image";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Compoments/Image',
	component: Image,
	tags: ['autodocs'],
};

export const image = {
	args: {
		webp: 'https://picsum.photos/1000/1000.webp',
		src: 'https://picsum.photos/1000/1000.jpg',
		alt: 'Placeholder',
		crop: "square"
	},
};

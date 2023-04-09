import { Video } from "./Video";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Compoments/Video',
	component: Video,
	tags: ['autodocs'],
};

export const Youtube = {
	args: {
		title: 'Youtube Title',
		src: 'https://youtu.be/xtHZKToMvus',
		size: "4x3"
	},
};

export const Vimeo = {
	args: {
		title: 'Viemo vieo',
		src: 'https://vimeo.com/243678113',
		size: "16x9"
	}
}

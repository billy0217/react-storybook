import { RTE } from "./RTE";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Compoments/RTE',
	component: RTE,
	tags: ['autodocs'],
};

export const Primary = {
	args: {
		content: null,
	},
};

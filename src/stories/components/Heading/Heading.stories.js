import { Heading } from "./Heading";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Compoments/Heading',
	component: Heading,
	tags: ['autodocs'],
};

export const Control = {
	args: {
		label: 'Heading',
		align: 'left'
	},
};

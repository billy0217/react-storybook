import { ExpandCollapse } from './ExpandCollapse';

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Compoments/ExpandCollapse',
	component: ExpandCollapse,
	tags: ['autodocs']
};

export const expandCollapse = {
	args: {
		heading: "Expand Collapse Heading",
		description: "Expand Collapse Description",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur urna ligula, quis consectetur eros accumsan ac",
	},
};
import {Faq} from './Faq';

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Compoments/FAQ',
	component: Faq,
	tags: ['autodocs'],
};

export const Control = {
	args: {
		heading : 'Faq heading',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur urna ligula, quis consectetur eros accumsan ac'
	}
};


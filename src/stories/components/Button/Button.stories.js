import { Button } from './Button';

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Compoments/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};


export const Primary = {
	args: {
		primary: true,
		label: 'Button',
	},
};

export const Secondary = {
	args: {
		label: 'Button',
	},
};

export const Large = {
	args: {
		size: 'large',
		label: 'Button',
	},
};

export const Small = {
	args: {
		size: 'small',
		label: 'Button',
	},
};

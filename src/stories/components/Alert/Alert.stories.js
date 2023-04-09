import { Alert } from "./Alert";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Compoments/Alert',
	component: Alert,
	tags: ['autodocs'],
};


export const error = {
	args: {
		content: 'This is an error alert — check it out!',
		type: 'error',
	},
};

export const warning = {
	args: {
		content: 'This is an warning alert — check it out!',
		type: 'warning',
	}
}

export const info = {
	args: {
		content: 'This is an info alert — check it out!',
		type: 'info',
	}
}

export const success = {
	args: {
		content: 'This is an success alert — check it out!',
		type: 'success',
	}
}
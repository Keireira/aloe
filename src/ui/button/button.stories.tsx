import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import type { StoryObj } from '@storybook/react';
import Button from './button';

const meta = {
	component: Button,
	title: 'Docs/Button',
	tags: ['autodocs'],
	parameters: {
		controls: { expanded: true }
	},
	args: {
		color: 'blue',
		size: 'large',
		isDisabled: false
	}
};

export const Default: StoryObj<typeof Button> = {
	render: (args) => {
		return (
			<BrowserRouter>
				<Button {...args}>Create</Button>
			</BrowserRouter>
		);
	}
};

export default meta;

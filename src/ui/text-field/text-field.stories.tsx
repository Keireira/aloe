import React from 'react';
import type { StoryObj } from '@storybook/react';
import TextField from './text-field';
import { FontStyles, ResetStyles, GeneralStyles } from '@src/core/styles';

const Wrapper = ({ children }: React.PropsWithChildren<unknown>) => {
	return (
		<>
			<ResetStyles />
			<FontStyles />
			<GeneralStyles />

			{children}
		</>
	);
};

const meta = {
	component: TextField,
	title: 'Docs/TextField',
	tags: ['autodocs'],
	parameters: {
		controls: { expanded: true }
	},
	args: {
		label: 'Label',
		withErrors: true,
		placeholder: 'Placeholder',
		type: 'text'
	}
};

export const Default: StoryObj<typeof TextField> = {
	render: (args) => {
		return (
			<Wrapper>
				<TextField {...args} />
			</Wrapper>
		);
	}
};

export default meta;

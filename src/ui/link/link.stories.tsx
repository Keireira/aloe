import React from 'react';
import type { StoryObj } from '@storybook/react';
import { FontStyles, ResetStyles, GeneralStyles } from '@src/core/styles';

import Link from './link';

const meta = {
	component: Link,
	title: 'Docs/Link',
	tags: ['autodocs'],
	parameters: {
		controls: { expanded: true }
	},
	args: {
		href: 'https://example.com'
	}
};

export const Default: StoryObj<typeof Link> = {
	render: (args) => {
		return (
			<>
				<ResetStyles />
				<FontStyles />
				<GeneralStyles />
				<Link {...args}>The missing link</Link>
			</>
		);
	}
};

export default meta;

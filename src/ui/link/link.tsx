import React from 'react';
import { NavLink } from 'react-router-dom';

import { Link as AdobeLink } from 'react-aria-components';
import Root from './link.styles';

import type { Props } from './link.d';

const Link = ({ to, children, ...restProps }: Props) => {
	if (to) {
		return (
			<Root as={NavLink} to={to} {...restProps}>
				{children}
			</Root>
		);
	}

	return (
		<Root as={AdobeLink} {...restProps} target="_blank" rel="noopener noreferrer">
			{children}
		</Root>
	);
};

export default Link;

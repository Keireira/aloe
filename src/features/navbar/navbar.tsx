import React from 'react';

import { Logo } from '@icons';
import Root, { Content, Title } from './navbar.styles';

const Navbar = () => {
	return (
		<Root>
			<Content>
				<Logo width={48} height={48} />
				<Title aria-label="classified">_&#x282F;L&#2588;S̸S̵I̷F̶&#x2588;ED&gt;&gt;</Title>
			</Content>
		</Root>
	);
};

export default Navbar;

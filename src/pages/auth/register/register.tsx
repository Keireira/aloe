import React from 'react';

import { Link } from '@ui';
import ROUTES from '@routes';
import Root, { Heading, Title, SubTitle } from './register.styles';

const Register = () => {
	return (
		<Root>
			<Heading>
				<Title>Sorry, no hats left</Title>

				<SubTitle>
					<Link to={ROUTES.AUTH.ROOT}>Back to brainrot</Link>
				</SubTitle>
			</Heading>
		</Root>
	);
};

export default Register;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import ROUTES from '@routes';
import { Button } from '@ui';
import Root from './main.styles';

import { toggleAuth } from '@core/auth-manager/store';

const Main = () => {
	const navigate = useNavigate();

	const logout = () => {
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('refresh_token');

		toggleAuth(false);

		navigate(ROUTES.AUTH.LOGIN);
	};

	return (
		<Root>
			<Button aria-label="Sign Out" type="button" onClick={logout}>
				Sign Out
			</Button>
		</Root>
	);
};

export default Main;

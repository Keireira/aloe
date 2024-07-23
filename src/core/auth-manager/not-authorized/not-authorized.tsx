import React from 'react';

import AuthPage from '@pages/auth';
import NavBar from '@features/navbar';

const NotAuthorized = () => {
	return (
		<>
			<NavBar />

			<AuthPage />
		</>
	);
};

export default NotAuthorized;

import React from 'react';

const Authorized = React.lazy(() => import('./authorized'));
const NotAuthorized = React.lazy(() => import('./not-authorized'));

const AuthManager = () => {
	const isAuthorized = false;

	switch (true) {
		case isAuthorized:
			return (
				<React.Suspense fallback={<>...</>}>
					<Authorized />
				</React.Suspense>
			);

		default:
			return (
				<React.Suspense fallback={<>...</>}>
					<NotAuthorized />
				</React.Suspense>
			);
	}
};

export default AuthManager;

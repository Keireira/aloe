import React from 'react';
import { useUnit } from 'effector-react';

import { $authStore } from './store';

const Authorized = React.lazy(() => import('./authorized'));
const NotAuthorized = React.lazy(() => import('./not-authorized'));

const AuthManager = () => {
	const authStore = useUnit($authStore);

	switch (true) {
		case authStore.isAuthorized:
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

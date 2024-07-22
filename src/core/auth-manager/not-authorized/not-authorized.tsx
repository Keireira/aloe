import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import AuthPage from '@pages/auth';

import ROUTES from '@routes';

const NotAuthorized = () => {
	return (
		<React.Suspense fallback={<>...</>}>
			<Routes>
				<Route path={ROUTES.AUTH.ROOT} element={<AuthPage />} />

				<Route path="*" element={<Navigate to={ROUTES.AUTH.ROOT} replace />} />
			</Routes>
		</React.Suspense>
	);
};

export default NotAuthorized;

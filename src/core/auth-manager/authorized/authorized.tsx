import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ROUTES from '@routes';

const MainPage = React.lazy(() => import('@pages/main'));

import NavBar from '@features/navbar';
import { Content } from './authorized.styles';

const Authorized = () => {
	return (
		<>
			<NavBar />

			<Content>
				<React.Suspense fallback={<>...</>}>
					<Routes>
						<Route path={ROUTES.MAIN.ROOT} element={<MainPage />} />

						<Route path="*" element={<Navigate to={ROUTES.MAIN.ROOT} replace />} />
					</Routes>
				</React.Suspense>
			</Content>
		</>
	);
};

export default Authorized;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ROUTES from '@routes';

import Login from './login';
import Register from './register';
import Root, { Background } from './auth.styles';

const AuthPage = () => {
	return (
		<Root>
			<Background aria-hidden="true" />

			<Routes>
				<Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
				<Route path={ROUTES.REGISTER.ROOT} element={<Register />} />

				<Route path="*" element={<Navigate to={ROUTES.AUTH.LOGIN} replace />} />
			</Routes>
		</Root>
	);
};

export default AuthPage;

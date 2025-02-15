import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { FontStyles, ResetStyles, GeneralStyles } from '@core/styles';

import { Toaster } from '@features';
import AuthManager from './auth-manager';

const queryClient = new QueryClient();

const Root = () => (
	<QueryClientProvider client={queryClient}>
		<ResetStyles />
		<FontStyles />
		<GeneralStyles />

		<BrowserRouter>
			<AuthManager />
		</BrowserRouter>

		<Toaster />
	</QueryClientProvider>
);

export default Root;

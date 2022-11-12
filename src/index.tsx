import React from 'react';
import { createRoot } from 'react-dom/client';
import { Outlet, RouterProvider } from '@tanstack/react-router';
import { ThemeProvider } from '@ui5/webcomponents-react';
import { QueryClientProvider } from '@tanstack/react-query';

import reportWebVitals from './utils/reportWebVitals';
import loadLocalizations from './utils/loadLocalizations';
import router from './utils/router';
import queryClient from './utils/queryClient';

import TanStackRouterDevtools from './components/devtools/TanStackRouterDevtools';
import TanStackQueryDevtools from './components/devtools/TanStackQueryDevtools';

// Global CSS
import './styles/globals.css';

// Localizations
loadLocalizations([
	{ lang: 'de', path: '/assets/i18n/messagebundle_de.properties' },
	{ lang: 'en', path: '/assets/i18n/messagebundle_en.properties' },
]);

// React initialization
const root = createRoot(document.getElementById('root')!);
root.render(
	<React.StrictMode>
		<ThemeProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router}>
					<Outlet />
					<TanStackRouterDevtools router={router} />
				</RouterProvider>
				<TanStackQueryDevtools />
			</QueryClientProvider>
		</ThemeProvider>
	</React.StrictMode>,
);

// Web vitals
reportWebVitals(console.info);

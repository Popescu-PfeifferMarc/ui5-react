import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@ui5/webcomponents-react';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

import reportWebVitals from './utils/reportWebVitals';
import router from './utils/router';
import queryClient from './utils/queryClient';
import { loadLocalizations } from './utils/localeHelpers';

import TanStackQueryDevtools from './components/devtools/TanStackQueryDevtools';

// Global CSS
import './styles/globals.css';

// Localizations
loadLocalizations();

// React initialization
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!)!;
root.render(
	<React.StrictMode>
		<ThemeProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				<TanStackQueryDevtools />
			</QueryClientProvider>
		</ThemeProvider>
	</React.StrictMode>,
);

// Web vitals
reportWebVitals(console.info);

import React from 'react';
import { createRoot } from 'react-dom/client';

import reportWebVitals from './utils/reportWebVitals';
import { Outlet, RouterProvider, createReactRouter } from '@tanstack/react-router';
import { ThemeProvider } from '@ui5/webcomponents-react';
import router from './router';

import './styles/globals.css';

const root = createRoot(document.getElementById('root')!);

root.render(
	<React.StrictMode>
		<ThemeProvider>
			<RouterProvider router={router}>
				<Outlet />
			</RouterProvider>
		</ThemeProvider>
	</React.StrictMode>,
);

reportWebVitals(console.info);

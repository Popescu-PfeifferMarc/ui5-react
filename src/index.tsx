import React from 'react';
import { createRoot } from 'react-dom/client';
import { Outlet, RouterProvider } from '@tanstack/react-router';
import { ThemeProvider } from '@ui5/webcomponents-react';

// @ts-expect-error
import { registerI18nLoader } from '@ui5/webcomponents-base/dist/asset-registries/i18n.js';
// @ts-expect-error
import parse from '@ui5/webcomponents-base/dist/PropertiesFileFormat.js';

import reportWebVitals from './utils/reportWebVitals';
import router from './router';

import './styles/globals.css';

registerI18nLoader('myApp', 'de', async () => {
	const props = await (await fetch('/i18n/messagebundle_de.properties')).text();
	return parse(props); // this call is required for parsing the properties text
});

registerI18nLoader('myApp', 'en', async () => {
	const props = await (await fetch('/i18n/messagebundle_en.properties')).text();
	return parse(props); // this call is required for parsing the properties text
});

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

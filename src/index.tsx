import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import reportWebVitals from './utils/reportWebVitals';

const root = createRoot(document.getElementById('root')!);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

reportWebVitals(console.info);

import React from 'react';

// Devtools
const TanStackQueryDevtools =
	process.env.NODE_ENV !== 'development'
		? // Render nothing in production
		  () => null
		: // Lazy load in development
		  React.lazy(() =>
				import('@tanstack/react-query-devtools').then((module) => ({
					default: module.ReactQueryDevtools,
				})),
		  );

export default TanStackQueryDevtools;

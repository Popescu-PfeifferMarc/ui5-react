import React from 'react';

// Devtools
const TanStackRouterDevtools =
	process.env.NODE_ENV !== 'development'
		? // Render nothing in production
		  () => null
		: // Lazy load in development
		  React.lazy(() =>
				import('@tanstack/react-router-devtools').then((module) => ({
					default: module.TanStackRouterDevtools,
				})),
		  );

export default TanStackRouterDevtools;

import React from 'react';
import { createRouteConfig, createReactRouter } from '@tanstack/react-router';

import IndexPage from './components/pages/IndexPage';

const routeConfig = createRouteConfig().createChildren((createRoute) => [
	createRoute({
		path: '/',
		element: <IndexPage />,
	}),
]);

export default createReactRouter({ routeConfig });

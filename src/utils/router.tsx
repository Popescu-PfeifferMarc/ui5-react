import React from 'react';
import { createRouteConfig, createReactRouter } from '@tanstack/react-router';

import IndexPage from '../components/pages/IndexPage';
import FoobarPage from '../components/pages/FoobarPage';

const routeConfig = createRouteConfig().createChildren((createRoute) => [
	createRoute({
		path: '/',
		element: <IndexPage />,
	}),
	createRoute({
		path: 'foobar',
		element: <FoobarPage />,
	}),
]);

export default createReactRouter({ routeConfig });

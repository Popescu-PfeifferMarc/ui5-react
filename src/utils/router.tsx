import React from 'react';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import IndexPage from '../components/pages/IndexPage';
import FoobarPage from '../components/pages/FoobarPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <IndexPage />,
	},
	{
		path: '/foobar',
		element: <FoobarPage />,
	},
]);

export default router;

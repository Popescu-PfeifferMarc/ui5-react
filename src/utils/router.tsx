import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import IndexPage from '../pages/IndexPage';
import FoobarPage from '../pages/FoobarPage';

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

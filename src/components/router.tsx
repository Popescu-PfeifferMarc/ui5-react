import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import IndexPage from '../pages/IndexPage';
import EventPage from '../pages/EventPage';
import TestPage from '../pages/TestPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <IndexPage />,
	},
	{
		path: '/event',
		element: <EventPage />,
	},
	{
		path: '/test',
		element: <TestPage />,
	},
]);

export default router;

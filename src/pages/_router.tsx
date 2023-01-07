import { createBrowserRouter } from 'react-router-dom';

import DocumentPage from './DocumentPage';
import EventListPage from './EventListPage';
import EventPage from './EventPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <EventListPage />,
	},
	{
		path: '/event/:event_id',
		element: <EventPage />,
	},
	{
		path: '/event/:event_id/document/:document_id',
		element: <DocumentPage />,
	},
]);

export default router;

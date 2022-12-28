import React from 'react';

import { useEventMisApiEventsEventsGetItem } from '../server/queries';

const EventPage = () => {
	const eventQuery = useEventMisApiEventsEventsGetItem({ eventId: 238644, viewName: '', format: 'flat' });

	return (
		<>
			{eventQuery.isLoading && <span>Loading...</span>}
			{eventQuery.isError && (
				<span>
					Error: <pre>{JSON.stringify(eventQuery.error)}</pre>
				</span>
			)}
			{eventQuery.isSuccess && <pre>{JSON.stringify(eventQuery.data)}</pre>}
		</>
	);
};

export default EventPage;

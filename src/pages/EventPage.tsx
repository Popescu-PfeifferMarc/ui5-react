import React from 'react';
import { useParams } from 'react-router-dom';

const FoobarPage = () => {
	const params = useParams() as { event_id: string, view_name: string };

	return (
		<>
			Event {params.event_id} {params.view_name}
		</>
	);
};

export default FoobarPage;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Table } from '@ui5/webcomponents-react/dist/webComponents/Table';
import { TableColumn } from '@ui5/webcomponents-react/dist/webComponents/TableColumn';
import { TableRow } from '@ui5/webcomponents-react/dist/webComponents/TableRow';
import { TableCell } from '@ui5/webcomponents-react/dist/webComponents/TableCell';

import PageWrapper from '../components/PageWrapper';
import { useMisApiEventsEventsGetCollection } from '../server/event/event';
import { EventItemBasic } from '../server/model';
import EventFilter, { defaultEventFilter, EventFilterElement } from '../components/EventFilter';

const EventListPage = () => {
	const [sorter, setSorter] = useState('end_date desc');
	const [filters, setFilters] = useState<EventFilterElement[]>(defaultEventFilter);

	const eventQuery = useMisApiEventsEventsGetCollection({
		order_by: sorter,
	});

	const navigate = useNavigate();

	const handleRowClicked = (row: EventItemBasic) => {
		const split = row.self.replaceAll('/mis/events/', '').split('/view/');
		const eventId = Number(split[0]);
		const eventView = split[1];

		navigate(`/event/${eventId}/${eventView}/`);
	};

	// TODO debug
	useEffect(() => {
		console.log({ filters });
	}, [filters]);

	return (
		<PageWrapper
			header="Select an Event"
			content={<EventFilter filters={filters} setFilters={setFilters} />}
		>
			<div
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'start',
					alignItems: 'center',
				}}
			>
				<Table mode="SingleSelect">
					<TableColumn>System Id</TableColumn>
					<TableColumn>Host</TableColumn>
					<TableColumn>Scenario</TableColumn>
					<TableColumn>System Type</TableColumn>
					<TableColumn>Start Date</TableColumn>
					<TableColumn>End Date</TableColumn>
					{eventQuery.isSuccess &&
						eventQuery.data.data.map((row) => (
							<TableRow key={row.self} onClick={() => handleRowClicked(row)}>
								<TableCell>{row.attributes.permanentSystemInformation?.sid ?? ''}</TableCell>
								<TableCell>{row.attributes.permanentSystemInformation?.host ?? ''}</TableCell>
								<TableCell>{row.title ?? ''}</TableCell>
								<TableCell>
									{row.attributes.permanentSystemInformation?.systemType ?? ''}
								</TableCell>
								<TableCell>
									{new Date(
										// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
										row.attributes.volatileSystemInformation![0].timestamp.value! * 1000,
									).toLocaleString()}
								</TableCell>
								<TableCell>
									{new Date(
										// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
										row.attributes.volatileSystemInformation![1].timestamp.value! * 1000,
									).toLocaleString()}
								</TableCell>
							</TableRow>
						))}
				</Table>
			</div>
		</PageWrapper>
	);
};

export default EventListPage;

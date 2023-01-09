import { useState, Fragment, useEffect } from 'react';

import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { Table } from '@ui5/webcomponents-react/dist/webComponents/Table';
import { TableColumn } from '@ui5/webcomponents-react/dist/webComponents/TableColumn';
import { TableRow } from '@ui5/webcomponents-react/dist/webComponents/TableRow';
import { TableCell } from '@ui5/webcomponents-react/dist/webComponents/TableCell';

import PageWrapper from '../components/PageWrapper';
import { useMisApiEventsEventsGetCollection } from '../server/event/event';

type EventRow = {
	systemId: string;
	host: string;
	scenario: string;
	title: string;
	systemType: string;
	startDate: Date;
	endDate: Date;
	eventId: number;
	eventView: string;
};

const columnHelper = createColumnHelper<EventRow>();

const columns = [
	columnHelper.accessor('systemId', {
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor('host', {
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor('scenario', {
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor('title', {
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor('endDate', {
		cell: (info) => info.getValue().toString(),
	}),
	columnHelper.accessor('startDate', {
		cell: (info) => info.getValue().toString(),
	}),
];

const EventListPage = () => {
	const eventQuery = useMisApiEventsEventsGetCollection({
		order_by: 'end_date desc',
	});
	// console.log({ isLoading, isSuccess, isError, queryData, error });

	const [data, setData] = useState<EventRow[]>([]);
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	useEffect(() => {
		if (eventQuery.isSuccess) {
			console.log(eventQuery.data.data[0]);

			setData(
				eventQuery.data.data.map((row) => {
					// row.self is of pattern: "/mis/events/239150/view/UpgradeNoUser"
					const split = row.self.replaceAll('/mis/events/', '').split('/view/');

					return {
						systemId: row.attributes.permanentSystemInformation?.sid ?? '',
						host: row.attributes.permanentSystemInformation?.host ?? '',
						scenario: row.attributes.permanentSystemInformation?.runType ?? '',
						title: row.title ?? '',
						eventId: Number(split[0]),
						eventView: split[1],
						systemType: row.attributes.permanentSystemInformation?.systemType ?? '',
						// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
						startDate: new Date(
							row.attributes.volatileSystemInformation![0].timestamp.value! * 1000,
						),
						// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
						endDate: new Date(
							row.attributes.volatileSystemInformation![1].timestamp.value! * 1000,
						),
					};
				}),
			);
		}
	}, [eventQuery.data, eventQuery.isSuccess]);

	const handleRowClicked = (eventId: string) => {
		console.log(eventId);
	};

	return (
		<PageWrapper header="Header" subHeader="Sub Header" content="content">
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
					{table.getHeaderGroups().map((headerGroup) => (
						<Fragment key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<TableColumn key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(header.column.columnDef.header, header.getContext())}
								</TableColumn>
							))}
						</Fragment>
					))}

					{table.getRowModel().rows.map((row) => (
						<TableRow onClick={() => handleRowClicked(row.getValue('systemId'))} key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<TableCell key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))}
				</Table>
			</div>
		</PageWrapper>
	);
};

export default EventListPage;

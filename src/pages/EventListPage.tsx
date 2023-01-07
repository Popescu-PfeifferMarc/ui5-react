import { useState, Fragment } from 'react';

import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { Table } from '@ui5/webcomponents-react/dist/webComponents/Table';
import { TableColumn } from '@ui5/webcomponents-react/dist/webComponents/TableColumn';
import { TableRow } from '@ui5/webcomponents-react/dist/webComponents/TableRow';
import { TableCell } from '@ui5/webcomponents-react/dist/webComponents/TableCell';

import PageWrapper from '../components/PageWrapper';

type Person = {
	firstName: string;
	lastName: string;
	age: number;
	visits: number;
	status: string;
	progress: number;
};

const defaultData: Person[] = [
	{
		firstName: 'tanner',
		lastName: 'linsley',
		age: 24,
		visits: 100,
		status: 'In Relationship',
		progress: 50,
	},
	{
		firstName: 'tandy',
		lastName: 'miller',
		age: 40,
		visits: 40,
		status: 'Single',
		progress: 80,
	},
	{
		firstName: 'joe',
		lastName: 'dirte',
		age: 45,
		visits: 20,
		status: 'Complicated',
		progress: 10,
	},
];

const columnHelper = createColumnHelper<Person>();

const columns = [
	columnHelper.accessor('firstName', {
		cell: (info) => info.getValue(),
		footer: (info) => info.column.id,
	}),
	columnHelper.accessor((row) => row.lastName, {
		id: 'lastName',
		cell: (info) => <i>{info.getValue()}</i>,
		header: () => <span>Last Name</span>,
		footer: (info) => info.column.id,
	}),
	columnHelper.accessor('age', {
		header: () => 'Age',
		cell: (info) => info.renderValue(),
		footer: (info) => info.column.id,
	}),
	columnHelper.accessor('visits', {
		header: () => <span>Visits</span>,
		footer: (info) => info.column.id,
	}),
	columnHelper.accessor('status', {
		header: 'Status',
		footer: (info) => info.column.id,
	}),
	columnHelper.accessor('progress', {
		header: 'Profile Progress',
		footer: (info) => info.column.id,
	}),
];

const EventListPage = () => {
	const [data, setData] = useState(() => [...defaultData]);
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

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
						<TableRow key={row.id}>
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

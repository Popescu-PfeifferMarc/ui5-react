import { DatePicker, Input } from '@ui5/webcomponents-react';
import { Select } from '@ui5/webcomponents-react/wrappers';
import { Option } from '@ui5/webcomponents-react/dist/webComponents/Option';
import React from 'react';

export type EventFilterName =
	| 'sid'
	| 'instnr'
	| 'host'
	| 'type'
	| 'run_type'
	| 'system_type'
	| 'start_release'
	| 'target_release'
	| 'start_date'
	| 'end_date';

export type EventFilterElement = {
	name: EventFilterName;
	label: string;
} & (
	| {
			type: 'text';
			value: string;
	  }
	| {
			type: 'date';
			value: Date | null;
	  }
	| {
			type: 'select';
			value: string;
			options: { label: string; value: string }[];
	  }
);

export type EventFilterType = EventFilterElement['type'];

export const defaultEventFilter: EventFilterElement[] = [
	{
		name: 'sid',
		label: 'System ID',
		type: 'text',
		value: '',
	},
	{
		name: 'instnr',
		label: 'Installation Number',
		type: 'text',
		value: '',
	},
	{
		name: 'host',
		label: 'Host',
		type: 'text',
		value: '',
	},
	{
		name: 'type',
		label: 'Type',
		type: 'select',
		value: '',
		options: [
			{ value: '', label: '' },
			{ value: 'UPGRADE', label: 'Upgrade' },
			{ value: 'TRANSPORT', label: 'Update' },
			{ value: 'S4CONVERSION', label: 'S/4HANA Conversion' },
		],
	},
	{
		name: 'run_type',
		label: 'Run Type',
		type: 'select',
		value: '',
		options: [
			{ value: '', label: '' },
			{ value: 'real', label: 'Go-Live' },
			{ value: 'test', label: 'Sandbox' },
		],
	},
	{
		name: 'system_type',
		label: 'System Type',
		type: 'select',
		value: '',
		options: [
			{ value: '', label: '' },
			{ value: 'DEV', label: 'Development' },
			{ value: 'QAS', label: 'Quality' },
			{ value: 'PRD', label: 'Production' },
			{ value: 'EARLYWATCH', label: 'EARLYWATCH' },
		],
	},
	{
		name: 'start_release',
		label: 'Start Release',
		type: 'text',
		value: '',
	},
	{
		name: 'target_release',
		label: 'Target Release',
		type: 'text',
		value: '',
	},
	{
		name: 'start_date',
		label: 'Start date',
		type: 'date',
		value: null,
	},
	{
		name: 'end_date',
		label: 'End date',
		type: 'date',
		value: null,
	},
];

const EventFilter: React.FC<{
	filters: EventFilterElement[];
	setFilters: React.Dispatch<React.SetStateAction<EventFilterElement[]>>;
}> = (props) => {
	const updateFilter = (filter: EventFilterElement, value: string | Date | undefined | null) => {
		if (value === undefined) return;
		const newFilters = [...props.filters];
		const newFilter = newFilters.find((x) => x.name === filter.name);
		if (newFilter) {
			newFilter.value = filter.type === 'date' ? new Date(`${value}`) : value;
			props.setFilters(newFilters);
		}
	};

	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				gap: '15px',
				marginBottom: '10px',
			}}
		>
			{props.filters.map((filter) => (
				<div
					key={filter.name}
					style={{
						flexGrow: 0,
						flexShrink: 0,
						flexBasis: '5.5cm',
						display: 'flex',
						flexDirection: 'column',
						flexWrap: 'wrap',
					}}
				>
					<span>{filter.label}</span>
					{filter.type === 'text' && (
						<Input value={filter.value} onChange={(e) => updateFilter(filter, e.target.value)} />
					)}
					{filter.type === 'select' && (
						<Select onChange={(e) => updateFilter(filter, e.detail.selectedOption.dataset.id)}>
							{filter.options.map((option) => (
								<Option key={option.value} data-id={option.value}>
									{option.label}
								</Option>
							))}
						</Select>
					)}
					{filter.type === 'date' && (
						<DatePicker
							onChange={(e) => updateFilter(filter, e.detail.value)}
							primaryCalendarType="Gregorian"
						/>
					)}
				</div>
			))}
		</div>
	);
};

export default EventFilter;

import React, { useState } from 'react';
import {
	Badge,
	Breadcrumbs,
	BreadcrumbsItem,
	Button,
	DynamicPage,
	DynamicPageHeader,
	DynamicPageTitle,
	FlexBox,
	FlexBoxAlignItems,
	FlexBoxDirection,
	FlexBoxJustifyContent,
	Label,
	ObjectStatus,
	Title,
} from '@ui5/webcomponents-react';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from '../../utils/localeHelpers';

import styles from '../../styles/IndexPage.module.css';
import ILink from '../general/ILink';
import mockAPI, { Filter } from '../../utils/mockAPI';

const IndexPage = () => {
	const [filter, setFilter] = useState<Filter>({
		/* TODO: Filter */
	});
	const eventQuery = useQuery({
		queryKey: ['events', { filter }],
		queryFn: () => mockAPI.getEvents(filter),
	});
	const l = useLocale();

	return (
		<DynamicPage
			style={{ height: '100vh' }}
			headerContent={
				<DynamicPageHeader>
					<FlexBox wrap="Wrap">
						<FlexBox direction="Column">
							<Label>Location: Warehouse A</Label>
							<Label>Halway: 23L</Label>
							<Label>Rack: 34</Label>
						</FlexBox>
						<span style={{ width: '1rem' }} />
						<FlexBox direction="Column">
							<Label>Availability:</Label>
							<ObjectStatus state="Success">In Stock</ObjectStatus>
						</FlexBox>
					</FlexBox>
				</DynamicPageHeader>
			}
			headerTitle={
				<DynamicPageTitle
					actions={
						<>
							<Button design="Emphasized">Edit</Button>
							<Button design="Transparent">Delete</Button>
							<Button design="Transparent">Copy</Button>
							<Button design="Transparent" icon="action" />
						</>
					}
					breadcrumbs={
						<Breadcrumbs>
							<BreadcrumbsItem>Home</BreadcrumbsItem>
							<BreadcrumbsItem>Page 1</BreadcrumbsItem>
							<BreadcrumbsItem>Page 2</BreadcrumbsItem>
							<BreadcrumbsItem>Page 3</BreadcrumbsItem>
							<BreadcrumbsItem>Page 4</BreadcrumbsItem>
							<BreadcrumbsItem>Page 5</BreadcrumbsItem>
						</Breadcrumbs>
					}
					header={<Title>Header Title</Title>}
					navigationActions={
						<>
							<Button design="Transparent" icon="full-screen" />
							<Button design="Transparent" icon="exit-full-screen" />
							<Button design="Transparent" icon="decline" />
						</>
					}
					subHeader={<Label>This is a sub header</Label>}
				>
					<Badge>Status: OK</Badge>
				</DynamicPageTitle>
			}
			onToggleHeaderContent={() => {
				/* TODO */
			}}
		>
			<FlexBox
				style={{ width: '100%', height: '1000px' }}
				direction={FlexBoxDirection.Column}
				justifyContent={FlexBoxJustifyContent.Start}
				alignItems={FlexBoxAlignItems.Center}
			>
				abc
			</FlexBox>
		</DynamicPage>
	);
};

export default IndexPage;

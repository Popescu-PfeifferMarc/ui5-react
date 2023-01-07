import React, { ReactNode } from 'react';

import { DynamicPage } from '@ui5/webcomponents-react/dist/components/DynamicPage';
import { DynamicPageHeader } from '@ui5/webcomponents-react/dist/components/DynamicPageHeader';
import { DynamicPageTitle } from '@ui5/webcomponents-react/dist/components/DynamicPageTitle';
import { Label } from '@ui5/webcomponents-react/dist/webComponents/Label';
import { Title } from '@ui5/webcomponents-react/dist/webComponents/Title';

const PageWrapper: React.FC<{
	children: ReactNode;
	header: ReactNode;
	subHeader: ReactNode;
	content: ReactNode;
}> = (props) => (
	<DynamicPage
		style={{ height: '100vh' }}
		headerContent={<DynamicPageHeader>{props.content}</DynamicPageHeader>}
		headerTitle={
			<DynamicPageTitle
				header={<Title>{props.header}</Title>}
				subHeader={<Label>{props.subHeader}</Label>}
			/>
		}
	>
		{props.children}
	</DynamicPage>
);

export default PageWrapper;

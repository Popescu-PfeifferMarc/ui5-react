import React, { ReactNode } from 'react';

import { DynamicPage } from '@ui5/webcomponents-react/dist/components/DynamicPage';
import { DynamicPageHeader } from '@ui5/webcomponents-react/dist/components/DynamicPageHeader';
import { DynamicPageTitle } from '@ui5/webcomponents-react/dist/components/DynamicPageTitle';
import { Label } from '@ui5/webcomponents-react/dist/webComponents/Label';
import { Title } from '@ui5/webcomponents-react/dist/webComponents/Title';

const PageWrapper: React.FC<{
	children: ReactNode;
	header?: ReactNode;
	subHeader?: ReactNode;
	content?: ReactNode;
}> = (props) => (
	<DynamicPage
		style={{ height: '100vh' }}
		headerContent={
			props.content === undefined ? undefined : <DynamicPageHeader>{props.content}</DynamicPageHeader>
		}
		headerTitle={
			<DynamicPageTitle
				header={props.header === undefined ? undefined : <Title>{props.header}</Title>}
				subHeader={props.subHeader === undefined ? undefined : <Label>{props.subHeader}</Label>}
			/>
		}
	>
		{props.children}
	</DynamicPage>
);

PageWrapper.defaultProps = {
	header: undefined,
	subHeader: undefined,
	content: undefined,
};

export default PageWrapper;

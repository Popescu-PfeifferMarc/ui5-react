import React, { useState } from 'react';
import {
	Button,
	FlexBox,
	FlexBoxAlignItems,
	FlexBoxDirection,
	FlexBoxJustifyContent,
	Link,
	LinkDesign,
	ShellBar,
} from '@ui5/webcomponents-react';
//@ts-ignore
import { getLanguage, setLanguage } from '@ui5/webcomponents-base/dist/config/Language.js';

//@ts-ignore
import { useI18nBundle } from '@ui5/webcomponents-react-base';

import '../../styles/IndexPage.module.css';

const IndexPage = () => {
	const [count, setCount] = useState(0);
	const l = useI18nBundle('myApp');

	return (
		<>
			<ShellBar primaryTitle="UI5 Web Components for React Template" />
			<FlexBox
				style={{ width: '100%', height: '100vh' }}
				direction={FlexBoxDirection.Column}
				justifyContent={FlexBoxJustifyContent.Center}
				alignItems={FlexBoxAlignItems.Center}
			>
				<Link
					href="https://sap.github.io/ui5-webcomponents-react/"
					target="_blank"
					design={LinkDesign.Emphasized}
				>
					Getting Started with UI5 Web Component for React
				</Link>
				<Button onClick={() => setCount(count + 1)}>Test Button {count}</Button>
				<span>{getLanguage()}</span>
				<span>{l.getText('PLEASE_WAIT')}</span>
			</FlexBox>
		</>
	);
};

export default IndexPage;

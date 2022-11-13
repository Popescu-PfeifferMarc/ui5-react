import React, { useState } from 'react';
import {
	Button,
	FlexBox,
	FlexBoxAlignItems,
	FlexBoxDirection,
	FlexBoxJustifyContent,
	ShellBar,
} from '@ui5/webcomponents-react';
import { useLocale } from '../../utils/localeHelpers';

import styles from '../../styles/IndexPage.module.css';
import ILink from '../general/ILink';

const IndexPage = () => {
	const [count, setCount] = useState(0);
	const l = useLocale();

	return (
		<>
			<ShellBar primaryTitle="UI5 Web Components for React Template" />
			<FlexBox
				style={{ width: '100%', height: '100vh' }}
				direction={FlexBoxDirection.Column}
				justifyContent={FlexBoxJustifyContent.Center}
				alignItems={FlexBoxAlignItems.Center}
			>
				<ILink to="https://sap.github.io/ui5-webcomponents-react/" ext target="_blank">
					Getting Started with UI5 Web Component for React
				</ILink>
				<Button onClick={() => setCount(count + 1)}>Test Button {count}</Button>
				<span>{l.getText('PLEASE_WAIT')}</span>
				<ILink to="/foobar" design="Emphasized">
					Foobar
				</ILink>
				<span className={styles.testClass}>test h1</span>
			</FlexBox>
		</>
	);
};

export default IndexPage;

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
	Link as UILink,
	LinkDomRef,
	LinkPropTypes as UILinkPropTypes,
	Ui5CustomEvent,
} from '@ui5/webcomponents-react';
import { NavigateOptions, useNavigate } from 'react-router-dom';

type UI5LinkClickEvent = Ui5CustomEvent<
	LinkDomRef,
	{
		altKey: boolean;
		ctrlKey: boolean;
		metaKey: boolean;
		shiftKey: boolean;
	}
>;

type LinkPropTypes = {
	to: string;
	ext?: boolean | undefined;
	// eslint-disable-next-line no-unused-vars
	onClick?: ((event: UI5LinkClickEvent) => void) | undefined;
	navOptions?: NavigateOptions | undefined;
	design?: 'Default' | 'Emphasized' | 'Subtle' | undefined;
} & Omit<UILinkPropTypes, 'href' | 'onClick' | 'design'>;

const ILink = React.forwardRef((props: LinkPropTypes, ref) => {
	const { to, onClick, navOptions, ...uiLinkOptions } = props;
	const navigate = useNavigate();

	if (props.ext) {
		return <UILink href={to.toString()} {...uiLinkOptions} ref={ref as React.Ref<never>} />;
	}

	return (
		<UILink
			{...uiLinkOptions}
			href=""
			onClick={(event) => {
				onClick?.(event);
				if (!event.defaultPrevented) navigate(to, navOptions);
			}}
			ref={ref as React.Ref<never>}
		/>
	);
});

ILink.defaultProps = {
	ext: false,
	onClick: undefined,
	navOptions: undefined,
	design: 'Default',
};

export default ILink;

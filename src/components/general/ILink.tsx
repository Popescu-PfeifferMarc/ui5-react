import React from 'react';
import {
	Link as UILink,
	LinkDesign,
	LinkDomRef,
	LinkPropTypes as UILinkPropTypes,
	Ui5CustomEvent,
} from '@ui5/webcomponents-react';
import { NavigateOptions, To, useHref } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

type LinkPropTypes = {
	to: string;
	ext?: boolean | undefined;
	onClick?:
		| ((
				event: Ui5CustomEvent<
					LinkDomRef,
					{
						altKey: boolean;
						ctrlKey: boolean;
						metaKey: boolean;
						shiftKey: boolean;
					}
				>,
		  ) => void)
		| undefined;
	navOptions?: NavigateOptions | undefined;
	design?: 'Default' | 'Emphasized' | 'Subtle' | undefined;
} & Omit<UILinkPropTypes, 'href' | 'onClick' | 'design'>;

const ILink = React.forwardRef((props: LinkPropTypes, ref) => {
	const { to, onClick, navOptions, ...uiLinkOptions } = props;

	if (props.ext) {
		return <UILink href={to.toString()} {...uiLinkOptions} ref={ref as React.Ref<any>} />;
	} else {
		const href = useHref(to);
		const navigate = useNavigate();

		return (
			<UILink
				{...uiLinkOptions}
				href=""
				onClick={(event) => {
					onClick?.(event);
					if (!event.defaultPrevented) navigate(to, navOptions);
				}}
				ref={ref as React.Ref<any>}
			/>
		);
	}
});

export default ILink;

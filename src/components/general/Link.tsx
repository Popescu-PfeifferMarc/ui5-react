import React from 'react';
import {
	Link as UILink,
	LinkDomRef,
	LinkPropTypes as UILinkPropTypes,
	Ui5CustomEvent,
} from '@ui5/webcomponents-react';
import { NavigateOptions, To, useHref } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

type LinkPropTypes = {
	to: To;
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
} & Omit<UILinkPropTypes, 'href' | 'onClick'>;

const Link = React.forwardRef(({ to, onClick, navOptions, ...uiLinkOptions }: LinkPropTypes, ref) => {
	const href = useHref(to);
	const navigate = useNavigate();

	return (
		<UILink
			href=""
			onClick={(event) => {
				onClick?.(event);
				if (!event.defaultPrevented) navigate(to, navOptions);
			}}
			ref={ref as React.Ref<any>}
			{...uiLinkOptions}
		/>
	);
});

export default Link;

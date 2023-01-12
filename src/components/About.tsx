import { Dialog, Button } from '@ui5/webcomponents-react';
import React, { useState } from 'react';

// TODO import icons

const About: React.FC<Record<string, never>> = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button icon="sys-help" onClick={() => setOpen(true)} />
			<Dialog
				open={open}
				headerText="About this App"
				footer={<Button onClick={() => setOpen(false)}>Close</Button>}
			>
				You are using the Downtime Optimization App. For further information: - Read the corresponding
				SAP Note - Watch a video about the App - Read the blog post - Show version information
			</Dialog>
		</>
	);
};

export default About;

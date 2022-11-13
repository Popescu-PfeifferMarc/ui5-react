import React from 'react';

import {
	ColorPicker,
	DatePicker,
	Form,
	FormItem,
	Input,
	FormGroup,
	Select,
	Option,
	Label,
	TextArea,
	CheckBox,
	Text,
} from '@ui5/webcomponents-react';

import Link from '../general/ILink';

const FoobarPage = () => {
	return (
		<div>
			<h1>test h1</h1>
			<br />
			FoobarPage
			<br />
			<Link to="/" design="Subtle">
				Foobar
			</Link>
			<br />
			<ColorPicker />
			<br />
			<DatePicker />
			<br />
			<Form
				style={{
					alignItems: 'center',
				}}
				titleText="Test Form"
			>
				<FormItem label="Sole Form Item">
					<Input />
				</FormItem>
				<FormGroup titleText="Personal Data">
					<FormItem label="Name">
						<Input />
					</FormItem>
					<FormItem label={<Label>Address</Label>}>
						<Input />
					</FormItem>
					<FormItem label="Country">
						<Select>
							<Option>Germany</Option>
							<Option>France</Option>
							<Option>Italy</Option>
						</Select>
					</FormItem>
					<FormItem
						label={
							<Label style={{ alignSelf: 'start', paddingTop: '0.25rem' }}>
								Additional Comment
							</Label>
						}
						// @ts-expect-error css not available
						style={{
							alignSelf: 'start',
						}}
					>
						<TextArea
							placeholder="The styles of the Label of the TextArea FormItem is set to: alignSelf: 'start', paddingTop: '0.25rem'"
							rows={5}
							style={{
								// @ts-expect-error css not available
								'--_ui5_textarea_margin': 0,
								width: '210px',
							}}
						/>
					</FormItem>
					<FormItem label="Home address">
						<CheckBox checked />
					</FormItem>
				</FormGroup>
				<FormGroup titleText="Company Data">
					<FormItem label="Company Name">
						<Input />
					</FormItem>
					<FormItem label="Company Address">
						<Input />
					</FormItem>
					<FormItem label="Company City">
						<Input />
					</FormItem>
					<FormItem label="Company Country">
						<Input />
					</FormItem>
					<FormItem label="Number of Employees">
						<Input disabled type="Number" value="5000" />
					</FormItem>
					<FormItem label="Member of Partner Network">
						<CheckBox checked />
					</FormItem>
				</FormGroup>
				<FormGroup titleText="Marketing Data">
					<FormItem label="Email">
						<Input type="Email" />
					</FormItem>
					<FormItem label="Company Email">
						<Input type="Email" />
					</FormItem>
					<FormItem label="I want to receive the newsletter">
						<CheckBox />
					</FormItem>
				</FormGroup>
				<FormGroup titleText="Contact">
					<FormItem label="Website">
						<Link ext to="https://sap.github.io/ui5-webcomponents-react">
							https://sap.github.io/ui5-webcomponents-react
						</Link>
					</FormItem>
					<FormItem label="Email">
						<Link ext to="mailto:some.one@sap.com">
							some.one@sap.com
						</Link>
					</FormItem>
					<FormItem label="Slack">
						<Link ext to="https://openui5.slack.com/archives/CSQEJ2J04">
							#webcomponents-react
						</Link>
					</FormItem>
					<FormItem label="Company">
						<Text>SAP</Text>
					</FormItem>
					<FormItem label="Company Headquarter">
						<Text>Walldorf, Germany</Text>
					</FormItem>
				</FormGroup>
			</Form>
		</div>
	);
};

export default FoobarPage;

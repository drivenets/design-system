import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DsNavHeader from './ds-nav-header';
import { DsButton, DsIcon, DsStatusBadge, DsTypography } from '@design-system/ui';

const meta: Meta<typeof DsNavHeader> = {
	title: 'Design System/Nav Header',
	component: DsNavHeader,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DsNavHeader>;

export const Default: Story = {
	render: function Render() {
		const [projectName, setProjectName] = useState('Untitled Project - 23-May-2024 04:47 PM');

		return (
			<DsNavHeader>
				<DsNavHeader.Start>
					<DsButton design="v1.2" buttonType="secondary-light" size="small" variant="dark">
						<DsIcon icon="close" size="tiny" />
						Close
					</DsButton>
				</DsNavHeader.Start>

				<DsNavHeader.Content>
					<DsTypography variant="body-sm-reg">{projectName}</DsTypography>
					<DsIcon icon="info" size="tiny" />
					<DsStatusBadge icon="stylus_note" status="draft" />
				</DsNavHeader.Content>

				<DsNavHeader.End>
					<DsButton design="v1.2" buttonType="secondary-light" size="small" variant="dark">
						Discard
					</DsButton>
					<DsButton design="v1.2" buttonType="primary" size="small">
						Save project
					</DsButton>
					<DsButton design="v1.2" buttonType="tertiary" size="small" variant="dark">
						<DsIcon icon="more_vert" size="tiny" />
					</DsButton>
				</DsNavHeader.End>
			</DsNavHeader>
		);
	},
};

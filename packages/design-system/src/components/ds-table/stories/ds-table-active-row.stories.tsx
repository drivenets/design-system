import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { DsDrawer } from '../../ds-drawer';
import { DsStack } from '../../ds-stack';
import { DsButtonV3 } from '../../ds-button-v3';
import { DsTypography } from '../../ds-typography';
import DsTable from '../ds-table';
import styles from './ds-table.stories.module.scss';
import { columns, defaultData, type Person } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { TableEmptyState, ProgressInfographic } from './components';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Components/Table/Active Row',
	component: DsTable,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		columns,
		data: defaultData,
		stickyHeader: true,
		bordered: true,
		fullWidth: true,
		expandable: false,
		emptyState: <TableEmptyState />,
		onRowClick: fn(),
	},
	decorators: [fullHeightDecorator],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

/**
 * Pass `activeRowId` to highlight a single row independently of selection. The
 * highlight persists until you change or clear the id — useful for marking the
 * record a side panel or detail view is currently showing.
 */
export const ActiveRow: Story = {
	args: {
		data: defaultData.slice(0, 10),
		activeRowId: '3',
	},
};

/**
 * Pass `activeRowId` to keep a row highlighted independently of selection —
 * ideal for a master/detail layout where clicking a row opens a drawer. Track
 * the clicked record in state, derive `activeRowId` from it, and clear it when
 * the drawer closes. Clicking the active row again toggles the drawer shut.
 */
export const WithDrawerAndActiveRow: Story = {
	name: 'Active Row with Drawer',
	args: {
		data: defaultData.slice(0, 10),
	},
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

		const activeRowId = selectedPerson?.id;
		const isDrawerOpen = !!activeRowId;

		const handleRowClick = (person: Person) => {
			const isSameRow = activeRowId === person.id;

			setSelectedPerson(isSameRow ? null : person);
		};

		return (
			<>
				<DsTable {...args} activeRowId={activeRowId} onRowClick={handleRowClick} />

				<DsDrawer
					open={isDrawerOpen}
					onOpenChange={(open) => {
						if (!open) {
							setSelectedPerson(null);
						}
					}}
					columns={4}
					position="end"
				>
					{selectedPerson && (
						<div className={styles.drawerContent}>
							<DsStack direction="column" gap={24}>
								<DsStack direction="row" justifyContent="space-between" alignItems="center">
									<DsTypography variant="heading2">Person Details</DsTypography>
									<DsButtonV3
										variant="tertiary"
										size="small"
										icon="close"
										aria-label="Close drawer"
										onClick={() => setSelectedPerson(null)}
									/>
								</DsStack>

								<DsStack direction="column" gap={16}>
									<DsStack direction="column" gap={4}>
										<DsTypography variant="body-sm-md" color="secondary">
											Full Name
										</DsTypography>
										<DsTypography variant="body-md-reg">
											{selectedPerson.firstName} {selectedPerson.lastName}
										</DsTypography>
									</DsStack>

									<DsStack direction="column" gap={4}>
										<DsTypography variant="body-sm-md" color="secondary">
											Age
										</DsTypography>
										<DsTypography variant="body-md-reg">{selectedPerson.age} years old</DsTypography>
									</DsStack>

									<DsStack direction="column" gap={4}>
										<DsTypography variant="body-sm-md" color="secondary">
											Visits
										</DsTypography>
										<DsTypography variant="body-md-reg">{selectedPerson.visits} visits</DsTypography>
									</DsStack>

									<DsStack direction="column" gap={4}>
										<DsTypography variant="body-sm-md" color="secondary">
											Status
										</DsTypography>
										<DsTypography variant="body-md-reg">
											{selectedPerson.status.charAt(0).toUpperCase() + selectedPerson.status.slice(1)}
										</DsTypography>
									</DsStack>

									<DsStack direction="column" gap={4}>
										<DsTypography variant="body-sm-md" color="secondary">
											Profile Progress
										</DsTypography>
										<ProgressInfographic value={selectedPerson.progress} />
									</DsStack>
								</DsStack>
							</DsStack>
						</div>
					)}
				</DsDrawer>
			</>
		);
	},
};

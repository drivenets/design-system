import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, userEvent, waitFor } from 'storybook/test';
import { useState } from 'react';
import classnames from 'classnames';
import DsIcon from '../../ds-icon/ds-icon';
import { DsDrawer } from '../../ds-drawer';
import DsTable from '../ds-table';
import styles from './ds-table.stories.module.scss';
import { columns, defaultData, type Person } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { getDataRows } from './common/story-test-helpers';
import { TableEmptyState, ProgressInfographic } from './components';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Design System/Table/Active Row',
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
		onRowClick: (row) => console.log('Row clicked:', row),
	},
	decorators: [fullHeightDecorator],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

export const WithDrawerAndActiveRow: Story = {
	name: 'Active Row with Drawer',
	args: {
		data: defaultData.slice(0, 10),
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
			<div>
				<div className={styles.programmaticSelectionDemo}>
					<h4 className={styles.programmaticSelectionDemo__title}>Active Row with Drawer Demo</h4>
					<p className={styles.programmaticSelectionDemo__description}>
						Click on any row to open a drawer with detailed information. The clicked row will remain
						highlighted to indicate which record the drawer is displaying.
					</p>
				</div>

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
							<div className={styles.drawerHeader}>
								<h2 className={styles.drawerTitle}>Person Details</h2>
								<button
									onClick={() => setSelectedPerson(null)}
									className={styles.drawerCloseButton}
									aria-label="Close drawer"
								>
									<DsIcon icon="close" size="medium" />
								</button>
							</div>

							<div className={styles.drawerDetails}>
								<div className={styles.drawerDetailItem}>
									<strong className={styles.drawerDetailLabel}>Full Name</strong>
									<p className={styles.drawerDetailValue}>
										{selectedPerson.firstName} {selectedPerson.lastName}
									</p>
								</div>

								<div className={styles.drawerDetailItem}>
									<strong className={styles.drawerDetailLabel}>Age</strong>
									<p className={styles.drawerDetailValue}>{selectedPerson.age} years old</p>
								</div>

								<div className={styles.drawerDetailItem}>
									<strong className={styles.drawerDetailLabel}>Visits</strong>
									<p className={styles.drawerDetailValue}>{selectedPerson.visits} visits</p>
								</div>

								<div className={styles.drawerDetailItem}>
									<strong className={styles.drawerDetailLabel}>Status</strong>
									<p className={classnames(styles.drawerDetailValue, styles.drawerDetailValueCapitalized)}>
										{selectedPerson.status}
									</p>
								</div>

								<div className={styles.drawerDetailItem}>
									<strong className={styles.drawerDetailLabel}>Profile Progress</strong>
									<div className={styles.drawerProgressContainer}>
										<ProgressInfographic value={selectedPerson.progress} />
									</div>
								</div>

								<div className={styles.drawerNote}>
									<p>
										<strong>Note:</strong> The row in the table remains highlighted while this drawer is open,
										helping you keep track of which record you&#39;re viewing.
									</p>
								</div>
							</div>
						</div>
					)}
				</DsDrawer>
			</div>
		);
	},
	play: async ({ canvas }) => {
		const dataRows = getDataRows(canvas);
		await userEvent.click(dataRows[0] as HTMLElement);

		await waitFor(() => {
			return expect(screen.getByRole('heading', { name: /person details/i })).toBeVisible();
		});
		await expect(screen.getByText(/tanner linsley/i)).toBeInTheDocument();

		await userEvent.click(screen.getByRole('button', { name: /close drawer/i }));

		await waitFor(() => {
			return expect(screen.queryByRole('heading', { name: /person details/i })).not.toBeInTheDocument();
		});

		const dataRowsAfter = getDataRows(canvas);
		await userEvent.click(dataRowsAfter[1] as HTMLElement);

		await waitFor(() => {
			return expect(screen.getByRole('heading', { name: /person details/i })).toBeVisible();
		});
		await expect(screen.getByText(/kevin fine/i)).toBeInTheDocument();

		await userEvent.click(dataRowsAfter[1] as HTMLElement);

		await waitFor(() => {
			return expect(screen.queryByRole('heading', { name: /person details/i })).not.toBeInTheDocument();
		});
	},
};

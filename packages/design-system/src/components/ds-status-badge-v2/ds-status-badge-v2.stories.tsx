import type { Meta, StoryObj } from '@storybook/react-vite';
import DsStatusBadgeV2 from './ds-status-badge-v2';
import { DsStatusBadgeV2 as DsStatusBadgeV2Responsive } from './index';
import {
	type StatusBadgeV2Phase,
	statusBadgeV2Phases,
	statusBadgeV2Sizes,
	statusBadgeV2Variants,
} from './ds-status-badge-v2.types';
import { phaseIconMap } from './phase-config';
import { DsIcon } from '../ds-icon';
import { DsStack } from '../ds-stack';
import styles from './ds-status-badge-v2.stories.module.scss';

const phaseLabels: Record<StatusBadgeV2Phase, string> = {
	'not-started': 'Vacant',
	temporary: 'Draft',
	'in-review': 'In Review',
	pending: 'Reserved',
	active: 'Active',
	execution: 'Testing',
	'result-succeeded': 'Provisioned',
	'result-warning': 'Warning',
	'result-failed': 'Failed',
	deprecated: 'Decommissioned',
};

const meta: Meta<typeof DsStatusBadgeV2> = {
	title: 'Components/StatusBadgeV2',
	component: DsStatusBadgeV2,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		phase: {
			control: 'select',
			options: statusBadgeV2Phases,
			description: 'Lifecycle phase determining color and default icon',
		},
		label: {
			control: 'text',
			description: 'Domain-specific text label (always required)',
		},
		icon: {
			control: 'text',
			description: 'Icon override; pass null for text-only',
		},
		iconOnly: {
			control: 'boolean',
			description: 'Hide label text, show as tooltip instead',
		},
		variant: {
			control: 'select',
			options: statusBadgeV2Variants,
			description: 'Visual variant: primary (tinted bg) or secondary (transparent)',
		},
		size: {
			control: 'select',
			options: statusBadgeV2Sizes,
			description: 'Badge size',
		},
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsStatusBadgeV2>;

export const Default: Story = {
	args: {
		phase: 'active',
		label: 'Active',
	},
};

export const AllPhases: Story = {
	render: () => (
		<DsStack direction="column" gap="var(--xl)">
			<DsStack direction="column" gap="var(--xs)">
				<div className={styles.sectionTitle}>Primary — Medium</div>
				<DsStack direction="row" flexWrap="wrap" gap="var(--standard)" alignItems="center">
					<DsStatusBadgeV2 phase="not-started" label={phaseLabels['not-started']} />
					<DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} />
					<DsStatusBadgeV2 phase="in-review" label={phaseLabels['in-review']} />
					<DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} />
					<DsStatusBadgeV2 phase="active" label={phaseLabels.active} />
					<DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} />
					<DsStatusBadgeV2 phase="result-succeeded" label={phaseLabels['result-succeeded']} />
					<DsStatusBadgeV2 phase="result-warning" label={phaseLabels['result-warning']} />
					<DsStatusBadgeV2 phase="result-failed" label={phaseLabels['result-failed']} />
					<DsStatusBadgeV2 phase="deprecated" label={phaseLabels.deprecated} />
				</DsStack>
			</DsStack>

			<DsStack direction="column" gap="var(--xs)">
				<div className={styles.sectionTitle}>Primary — Small</div>
				<DsStack direction="row" flexWrap="wrap" gap="var(--standard)" alignItems="center">
					<DsStatusBadgeV2 phase="not-started" label={phaseLabels['not-started']} size="small" />
					<DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} size="small" />
					<DsStatusBadgeV2 phase="in-review" label={phaseLabels['in-review']} size="small" />
					<DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} size="small" />
					<DsStatusBadgeV2 phase="active" label={phaseLabels.active} size="small" />
					<DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} size="small" />
					<DsStatusBadgeV2 phase="result-succeeded" label={phaseLabels['result-succeeded']} size="small" />
					<DsStatusBadgeV2 phase="result-warning" label={phaseLabels['result-warning']} size="small" />
					<DsStatusBadgeV2 phase="result-failed" label={phaseLabels['result-failed']} size="small" />
					<DsStatusBadgeV2 phase="deprecated" label={phaseLabels.deprecated} size="small" />
				</DsStack>
			</DsStack>

			<DsStack direction="column" gap="var(--xs)">
				<div className={styles.sectionTitle}>Secondary — Medium</div>
				<DsStack direction="row" flexWrap="wrap" gap="var(--standard)" alignItems="center">
					<DsStatusBadgeV2 phase="not-started" label={phaseLabels['not-started']} variant="secondary" />
					<DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} variant="secondary" />
					<DsStatusBadgeV2 phase="in-review" label={phaseLabels['in-review']} variant="secondary" />
					<DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} variant="secondary" />
					<DsStatusBadgeV2 phase="active" label={phaseLabels.active} variant="secondary" />
					<DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} variant="secondary" />
					<DsStatusBadgeV2
						phase="result-succeeded"
						label={phaseLabels['result-succeeded']}
						variant="secondary"
					/>
					<DsStatusBadgeV2 phase="result-warning" label={phaseLabels['result-warning']} variant="secondary" />
					<DsStatusBadgeV2 phase="result-failed" label={phaseLabels['result-failed']} variant="secondary" />
					<DsStatusBadgeV2 phase="deprecated" label={phaseLabels.deprecated} variant="secondary" />
				</DsStack>
			</DsStack>

			<DsStack direction="column" gap="var(--xs)">
				<div className={styles.sectionTitle}>Secondary — Small</div>
				<DsStack direction="row" flexWrap="wrap" gap="var(--standard)" alignItems="center">
					<DsStatusBadgeV2
						phase="not-started"
						label={phaseLabels['not-started']}
						variant="secondary"
						size="small"
					/>
					<DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} variant="secondary" size="small" />
					<DsStatusBadgeV2
						phase="in-review"
						label={phaseLabels['in-review']}
						variant="secondary"
						size="small"
					/>
					<DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} variant="secondary" size="small" />
					<DsStatusBadgeV2 phase="active" label={phaseLabels.active} variant="secondary" size="small" />
					<DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} variant="secondary" size="small" />
					<DsStatusBadgeV2
						phase="result-succeeded"
						label={phaseLabels['result-succeeded']}
						variant="secondary"
						size="small"
					/>
					<DsStatusBadgeV2
						phase="result-warning"
						label={phaseLabels['result-warning']}
						variant="secondary"
						size="small"
					/>
					<DsStatusBadgeV2
						phase="result-failed"
						label={phaseLabels['result-failed']}
						variant="secondary"
						size="small"
					/>
					<DsStatusBadgeV2
						phase="deprecated"
						label={phaseLabels.deprecated}
						variant="secondary"
						size="small"
					/>
				</DsStack>
			</DsStack>
		</DsStack>
	),
};

export const IconOnly: Story = {
	render: () => (
		<DsStack direction="column" gap="var(--xl)">
			<DsStack direction="column" gap="var(--xs)">
				<div className={styles.sectionTitle}>Icon-only (hover for tooltip)</div>
				<DsStack direction="row" flexWrap="wrap" gap="var(--standard)" alignItems="center">
					<DsStatusBadgeV2 phase="not-started" label={phaseLabels['not-started']} iconOnly />
					<DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} iconOnly />
					<DsStatusBadgeV2 phase="in-review" label={phaseLabels['in-review']} iconOnly />
					<DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} iconOnly />
					<DsStatusBadgeV2 phase="active" label={phaseLabels.active} iconOnly />
					<DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} iconOnly />
					<DsStatusBadgeV2 phase="result-succeeded" label={phaseLabels['result-succeeded']} iconOnly />
					<DsStatusBadgeV2 phase="result-warning" label={phaseLabels['result-warning']} iconOnly />
					<DsStatusBadgeV2 phase="result-failed" label={phaseLabels['result-failed']} iconOnly />
					<DsStatusBadgeV2 phase="deprecated" label={phaseLabels.deprecated} iconOnly />
				</DsStack>
			</DsStack>

			<DsStack direction="column" gap="var(--xs)">
				<div className={styles.sectionTitle}>Icon-only — Small</div>
				<DsStack direction="row" flexWrap="wrap" gap="var(--standard)" alignItems="center">
					<DsStatusBadgeV2 phase="not-started" label={phaseLabels['not-started']} iconOnly size="small" />
					<DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} iconOnly size="small" />
					<DsStatusBadgeV2 phase="in-review" label={phaseLabels['in-review']} iconOnly size="small" />
					<DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} iconOnly size="small" />
					<DsStatusBadgeV2 phase="active" label={phaseLabels.active} iconOnly size="small" />
					<DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} iconOnly size="small" />
					<DsStatusBadgeV2
						phase="result-succeeded"
						label={phaseLabels['result-succeeded']}
						iconOnly
						size="small"
					/>
					<DsStatusBadgeV2
						phase="result-warning"
						label={phaseLabels['result-warning']}
						iconOnly
						size="small"
					/>
					<DsStatusBadgeV2 phase="result-failed" label={phaseLabels['result-failed']} iconOnly size="small" />
					<DsStatusBadgeV2 phase="deprecated" label={phaseLabels.deprecated} iconOnly size="small" />
				</DsStack>
			</DsStack>

			<DsStack direction="column" gap="var(--xs)">
				<div className={styles.sectionTitle}>Icon-only Secondary</div>
				<DsStack direction="row" flexWrap="wrap" gap="var(--standard)" alignItems="center">
					<DsStatusBadgeV2
						phase="not-started"
						label={phaseLabels['not-started']}
						iconOnly
						variant="secondary"
					/>
					<DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} iconOnly variant="secondary" />
					<DsStatusBadgeV2 phase="in-review" label={phaseLabels['in-review']} iconOnly variant="secondary" />
					<DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} iconOnly variant="secondary" />
					<DsStatusBadgeV2 phase="active" label={phaseLabels.active} iconOnly variant="secondary" />
					<DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} iconOnly variant="secondary" />
					<DsStatusBadgeV2
						phase="result-succeeded"
						label={phaseLabels['result-succeeded']}
						iconOnly
						variant="secondary"
					/>
					<DsStatusBadgeV2
						phase="result-warning"
						label={phaseLabels['result-warning']}
						iconOnly
						variant="secondary"
					/>
					<DsStatusBadgeV2
						phase="result-failed"
						label={phaseLabels['result-failed']}
						iconOnly
						variant="secondary"
					/>
					<DsStatusBadgeV2 phase="deprecated" label={phaseLabels.deprecated} iconOnly variant="secondary" />
				</DsStack>
			</DsStack>
		</DsStack>
	),
};

export const TextOnly: Story = {
	render: () => (
		<DsStack direction="column" gap="var(--xs)">
			<div className={styles.sectionTitle}>Text-only (icon=null)</div>
			<DsStack direction="row" flexWrap="wrap" gap="var(--standard)" alignItems="center">
				<DsStatusBadgeV2 phase="not-started" label={phaseLabels['not-started']} icon={null} />
				<DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} icon={null} />
				<DsStatusBadgeV2 phase="in-review" label={phaseLabels['in-review']} icon={null} />
				<DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} icon={null} />
				<DsStatusBadgeV2 phase="active" label={phaseLabels.active} icon={null} />
				<DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} icon={null} />
				<DsStatusBadgeV2 phase="result-succeeded" label={phaseLabels['result-succeeded']} icon={null} />
				<DsStatusBadgeV2 phase="result-warning" label={phaseLabels['result-warning']} icon={null} />
				<DsStatusBadgeV2 phase="result-failed" label={phaseLabels['result-failed']} icon={null} />
				<DsStatusBadgeV2 phase="deprecated" label={phaseLabels.deprecated} icon={null} />
			</DsStack>
		</DsStack>
	),
};

const phaseExamples: Record<StatusBadgeV2Phase, string> = {
	'not-started': 'Vacant, Spare',
	temporary: 'Design, Draft',
	'in-review': 'PnR, L1 design complete',
	pending: 'Reserved, Pending, Ordered',
	active: 'Active, Installed, In-use',
	execution: 'Testing, Upgrading, Initializing',
	'result-succeeded': 'Test passed, Provisioning complete',
	'result-warning': 'Domain-specific warnings',
	'result-failed': 'Cancelled, Fault, Failed, Disconnected',
	deprecated: 'Decommissioned, Sacrificed',
};

export const PhaseReference: Story = {
	render: () => (
		<DsStack direction="column" gap="var(--xs)">
			<table className={styles.docsTable}>
				<thead>
					<tr>
						<th>Phase</th>
						<th>Badge</th>
						<th>Icon</th>
						<th>Example Domain Statuses</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<code>not-started</code>
						</td>
						<td>
							<DsStatusBadgeV2 phase="not-started" label={phaseLabels['not-started']} />
						</td>
						<td>
							<DsIcon icon={phaseIconMap['not-started']} size="tiny" filled />
						</td>
						<td>{phaseExamples['not-started']}</td>
					</tr>
					<tr>
						<td>
							<code>temporary</code>
						</td>
						<td>
							<DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} />
						</td>
						<td>
							<DsIcon icon={phaseIconMap.temporary} size="tiny" filled />
						</td>
						<td>{phaseExamples.temporary}</td>
					</tr>
					<tr>
						<td>
							<code>in-review</code>
						</td>
						<td>
							<DsStatusBadgeV2 phase="in-review" label={phaseLabels['in-review']} />
						</td>
						<td>
							<DsIcon icon={phaseIconMap['in-review']} size="tiny" filled />
						</td>
						<td>{phaseExamples['in-review']}</td>
					</tr>
					<tr>
						<td>
							<code>pending</code>
						</td>
						<td>
							<DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} />
						</td>
						<td>
							<DsIcon icon={phaseIconMap.pending} size="tiny" filled />
						</td>
						<td>{phaseExamples.pending}</td>
					</tr>
					<tr>
						<td>
							<code>active</code>
						</td>
						<td>
							<DsStatusBadgeV2 phase="active" label={phaseLabels.active} />
						</td>
						<td>
							<DsIcon icon={phaseIconMap.active} size="tiny" filled />
						</td>
						<td>{phaseExamples.active}</td>
					</tr>
					<tr>
						<td>
							<code>execution</code>
						</td>
						<td>
							<DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} />
						</td>
						<td>
							<DsIcon icon={phaseIconMap.execution} size="tiny" filled />
						</td>
						<td>{phaseExamples.execution}</td>
					</tr>
					<tr>
						<td>
							<code>result-succeeded</code>
						</td>
						<td>
							<DsStatusBadgeV2 phase="result-succeeded" label={phaseLabels['result-succeeded']} />
						</td>
						<td>
							<DsIcon icon={phaseIconMap['result-succeeded']} size="tiny" filled />
						</td>
						<td>{phaseExamples['result-succeeded']}</td>
					</tr>
					<tr>
						<td>
							<code>result-warning</code>
						</td>
						<td>
							<DsStatusBadgeV2 phase="result-warning" label={phaseLabels['result-warning']} />
						</td>
						<td>
							<DsIcon icon={phaseIconMap['result-warning']} size="tiny" filled />
						</td>
						<td>{phaseExamples['result-warning']}</td>
					</tr>
					<tr>
						<td>
							<code>result-failed</code>
						</td>
						<td>
							<DsStatusBadgeV2 phase="result-failed" label={phaseLabels['result-failed']} />
						</td>
						<td>
							<DsIcon icon={phaseIconMap['result-failed']} size="tiny" filled />
						</td>
						<td>{phaseExamples['result-failed']}</td>
					</tr>
					<tr>
						<td>
							<code>deprecated</code>
						</td>
						<td>
							<DsStatusBadgeV2 phase="deprecated" label={phaseLabels.deprecated} />
						</td>
						<td>
							<DsIcon icon={phaseIconMap.deprecated} size="tiny" filled />
						</td>
						<td>{phaseExamples.deprecated}</td>
					</tr>
				</tbody>
			</table>
		</DsStack>
	),
};

export const ResponsiveSize: Story = {
	parameters: { layout: 'centered' },
	render: () => (
		<DsStack direction="row" gap="var(--sm)" alignItems="center" flexWrap="wrap">
			<DsStatusBadgeV2Responsive
				phase="active"
				label="lg: medium / md: small"
				size={{ lg: 'medium', md: 'small' }}
			/>
			<DsStatusBadgeV2Responsive
				phase="pending"
				label="lg: small / md: medium"
				size={{ lg: 'small', md: 'medium' }}
			/>
			<DsStatusBadgeV2Responsive phase="execution" label="static: medium" size="medium" />
		</DsStack>
	),
};

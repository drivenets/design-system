import type { Meta, StoryObj } from '@storybook/react';
import { ColumnDef } from '@tanstack/react-table';
import classnames from 'classnames';
import DsIcon from '../ds-icon/ds-icon';
import DsTable from './ds-table';
import styles from './ds-table.stories.module.scss';

type Person = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: 'relationship' | 'complicated' | 'single';
  progress: number;
};

const ProgressInfographic = ({ value }: { value: number }) => {
  let barClass = styles.bar;
  if (value > 70) {
    barClass += ` ${styles['bar--high']}`;
  } else if (value > 40) {
    barClass += ` ${styles['bar--medium']}`;
  } else {
    barClass += ` ${styles['bar--low']}`;
  }

  return (
    <div className={styles.progressInfographic}>
      <div className={barClass} style={{ width: `${value}%` }}>
        {value}%
      </div>
    </div>
  );
};

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'age',
    header: 'Age',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'visits',
    header: 'Visits',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'progress',
    header: 'Profile Progress',
    cell: info => `${info.getValue()}%`,
  },
];

const defaultData: Person[] = [
  {
    id: 1,
    firstName: 'Tanner',
    lastName: 'Linsley',
    age: 33,
    visits: 100,
    status: 'single',
    progress: 75,
  },
  {
    id: 2,
    firstName: 'Kevin',
    lastName: 'Vonderheide',
    age: 28,
    visits: 200,
    status: 'relationship',
    progress: 50,
  },
  {
    id: 3,
    firstName: 'John',
    lastName: 'Doe',
    age: 45,
    visits: 50,
    status: 'complicated',
    progress: 90,
  },
  { id: 4, firstName: 'Jane', lastName: 'Smith', age: 30, visits: 150, status: 'single', progress: 60 },
  {
    id: 5,
    firstName: 'Peter',
    lastName: 'Jones',
    age: 22,
    visits: 250,
    status: 'relationship',
    progress: 30,
  },
  {
    id: 6,
    firstName: 'Mary',
    lastName: 'Jane',
    age: 38,
    visits: 80,
    status: 'complicated',
    progress: 85,
  },
  {
    id: 7,
    firstName: 'David',
    lastName: 'Williams',
    age: 50,
    visits: 120,
    status: 'single',
    progress: 40,
  },
  {
    id: 8,
    firstName: 'Sarah',
    lastName: 'Brown',
    age: 25,
    visits: 180,
    status: 'relationship',
    progress: 70,
  },
  {
    id: 9,
    firstName: 'Michael',
    lastName: 'Davis',
    age: 41,
    visits: 95,
    status: 'complicated',
    progress: 20,
  },
  {
    id: 10,
    firstName: 'Emily',
    lastName: 'Miller',
    age: 36,
    visits: 110,
    status: 'single',
    progress: 55,
  },
  {
    id: 11,
    firstName: 'Daniel',
    lastName: 'Wilson',
    age: 29,
    visits: 220,
    status: 'relationship',
    progress: 80,
  },
  {
    id: 12,
    firstName: 'Olivia',
    lastName: 'Moore',
    age: 48,
    visits: 65,
    status: 'complicated',
    progress: 15,
  },
  {
    id: 13,
    firstName: 'James',
    lastName: 'Taylor',
    age: 31,
    visits: 135,
    status: 'single',
    progress: 95,
  },
  {
    id: 14,
    firstName: 'Sophia',
    lastName: 'Anderson',
    age: 27,
    visits: 170,
    status: 'relationship',
    progress: 25,
  },
  {
    id: 15,
    firstName: 'Robert',
    lastName: 'Thomas',
    age: 43,
    visits: 88,
    status: 'complicated',
    progress: 50,
  },
];

// --- Storybook Meta ---
const meta: Meta<typeof DsTable<Person, unknown>> = {
  title: 'Design System/Table',
  component: DsTable,
  parameters: {
    layout: 'fullscreen', // Use fullscreen for tables usually
  },
  tags: ['autodocs'],
  argTypes: {
    // Define argTypes based on DsTable props if needed for controls
    // Example:
    // pagination: { control: 'boolean' },
    // zebra: { control: 'boolean' },
    // bordered: { control: 'boolean' },
    // highlightOnHover: { control: 'boolean' },
  },
  args: {
    // Default args for all stories
    columns: columns,
    data: defaultData,
    pagination: true,
    pageSize: 5,
    stickyHeader: true,
    bordered: true,
    fullWidth: true,
    highlightOnHover: true,
    expandable: false,
    virtualized: false, // Keep virtualized off by default for simpler stories
    emptyState: <div>No data available</div>,
    onRowClick: row => console.log('Row clicked:', row),
  },
  decorators: [
    Story => (
      <div className={styles.storyPadding}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

// --- Stories ---

export const Default: Story = {
  args: {
    // Override default args here if needed
    pagination: false, // Disable pagination for default view
  },
};

export const Paginated: Story = {
  args: {
    pagination: true,
    pageSize: 5,
    data: defaultData, // Ensure enough data for pagination
  },
};

export const Sortable: Story = {
  args: {
    // Sorting is enabled by default based on component code (getSortedRowModel)
    // No specific args needed unless you want to set initial sort state
  },
};

export const Expandable: Story = {
  args: {
    expandable: true,
    renderExpandedRow: row => (
      <div className={styles.expandedRowDetails}>
        <h4>Expanded Details for {row.firstName}</h4>
        <p>ID: {row.id}</p>
        <p>
          Full Name: {row.firstName} {row.lastName}
        </p>
        <p>Status: {row.status}</p>
      </div>
    ),
  },
};

export const EmptyState: Story = {
  args: {
    data: [], // Provide empty data array
    emptyState: (
      <div className={styles.emptyStateContainer}>
        <DsIcon icon="info" size="large" />
        <p className={styles.emptyStateContainer__text}>No matching records found.</p>
      </div>
    ),
  },
};

export const NoBorder: Story = {
  args: {
    bordered: false,
  },
};

export const Selectable: Story = {
  args: {
    selectable: true,
    onSelectionChange: selectedRows => console.log('Selected rows:', selectedRows),
  },
};

export const WithRowActions: Story = {
  args: {
    primaryRowActions: [
      {
        icon: 'visibility',
        label: 'Edit',
        disabled: data => {
          return data.firstName === 'Tanner'; // Example condition to disable action
        },
        onClick: data => {
          console.log('Row clicked', data);
          alert(`Row clicked ${JSON.stringify(data)}`);
        },
      },
    ],
    secondaryRowActions: [
      {
        icon: 'delete_outline',
        label: 'Delete',
        tooltip: 'Delete this row',
        disabled: data => data.status === 'single',
        onClick: data => {
          alert(`Delete action for ${data.firstName}`);
        },
      },
      {
        icon: 'info',
        label: 'Details',
        tooltip: 'Show details',
        onClick: data => {
          alert(`Details for ${data.firstName}`);
        },
      },
    ],
  },
};

export const WithBulkActions: Story = {
  args: {
    selectable: true,
    actions: [
      {
        icon: 'alarm',
        label: 'Notify',
        onClick: () => {},
      },
      {
        icon: 'folder_open',
        label: 'Folder',
        onClick: () => {},
      },
      {
        icon: 'delete_outline',
        label: 'Delete',
        onClick: () => {},
      },
    ],
  },
};

export const WithProgressInfographic: Story = {
  name: 'Progress as Infographic',
  args: {
    columns: columns.map(col => {
      if ('accessorKey' in col && col.accessorKey === 'progress') {
        return {
          ...col,
          header: 'Profile Progress',
          cell: info => <ProgressInfographic value={info.getValue() as number} />,
        } as ColumnDef<Person>;
      } else if ('accessorKey' in col && col.accessorKey === 'status') {
        return {
          ...col,
          header: 'Status',
          cell: info => (
            <span
              className={classnames(
                styles.statusCell,
                styles[`statusCell--${info.getValue() as string}`],
              )}
            >
              {info.getValue() as string}
            </span>
          ),
        } as ColumnDef<Person>;
      }
      return col;
    }),
    data: defaultData,
    pagination: true,
    pageSize: 5,
  },
};

import type { ColumnDef } from '@tanstack/react-table';

export type Status = 'relationship' | 'complicated' | 'single';

export type Person = {
	id: string;
	firstName: string;
	lastName: string;
	age: number;
	visits: number;
	status: Status;
	progress: number;
};

export const columns: ColumnDef<Person>[] = [
	{
		accessorKey: 'firstName',
		header: 'First Name',
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'lastName',
		header: 'Last Name',
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'age',
		header: 'Age',
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'visits',
		header: 'Visits',
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'progress',
		header: 'Profile Progress',
		cell: (info) => `${String(info.getValue())}%`,
	},
];

export const defaultData: Person[] = [
	{
		id: '1',
		firstName: 'Tanner',
		lastName: 'Linsley',
		age: 33,
		visits: 100,
		status: 'single',
		progress: 75,
	},
	{
		id: '2',
		firstName: 'Kevin',
		lastName: 'Fine',
		age: 28,
		visits: 200,
		status: 'relationship',
		progress: 50,
	},
	{
		id: '3',
		firstName: 'John',
		lastName: 'Doe',
		age: 45,
		visits: 50,
		status: 'complicated',
		progress: 90,
	},
	{
		id: '4',
		firstName: 'Jane',
		lastName: 'Smith',
		age: 30,
		visits: 150,
		status: 'single',
		progress: 60,
	},
	{
		id: '5',
		firstName: 'Peter',
		lastName: 'Jones',
		age: 22,
		visits: 250,
		status: 'relationship',
		progress: 30,
	},
	{
		id: '6',
		firstName: 'Mary',
		lastName: 'Jane',
		age: 38,
		visits: 80,
		status: 'complicated',
		progress: 85,
	},
	{
		id: '7',
		firstName: 'David',
		lastName: 'Williams',
		age: 50,
		visits: 120,
		status: 'single',
		progress: 40,
	},
	{
		id: '8',
		firstName: 'Sarah',
		lastName: 'Brown',
		age: 25,
		visits: 180,
		status: 'relationship',
		progress: 70,
	},
	{
		id: '9',
		firstName: 'Michael',
		lastName: 'Davis',
		age: 41,
		visits: 95,
		status: 'complicated',
		progress: 20,
	},
	{
		id: '10',
		firstName: 'Emily',
		lastName: 'Miller',
		age: 36,
		visits: 110,
		status: 'single',
		progress: 55,
	},
	{
		id: '11',
		firstName: 'Daniel',
		lastName: 'Wilson',
		age: 29,
		visits: 220,
		status: 'relationship',
		progress: 80,
	},
	{
		id: '12',
		firstName: 'Olivia',
		lastName: 'Moore',
		age: 48,
		visits: 65,
		status: 'complicated',
		progress: 15,
	},
	{
		id: '13',
		firstName: 'James',
		lastName: 'Taylor',
		age: 31,
		visits: 135,
		status: 'single',
		progress: 95,
	},
	{
		id: '14',
		firstName: 'Sophia',
		lastName: 'Anderson',
		age: 27,
		visits: 170,
		status: 'relationship',
		progress: 25,
	},
	{
		id: '15',
		firstName: 'Robert',
		lastName: 'Thomas',
		age: 43,
		visits: 88,
		status: 'complicated',
		progress: 50,
	},
];

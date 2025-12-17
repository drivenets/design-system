import type { SortingState } from '@tanstack/react-table';
import { Status } from '../ds-table.stories';

export type Person = {
	id: string;
	firstName: string;
	lastName: string;
	age: number;
	visits: number;
	status: Status;
	progress: number;
};

export interface GeneratedDataResult {
	data: Person[];
	meta: {
		totalRowCount: number;
	};
}

/**
 * Generates mock data for table stories with pagination support
 */
export const generatePersonData = (
	start: number,
	size: number,
	sorting: SortingState,
	totalRows: number = 10_000,
): GeneratedDataResult => {
	const firstNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
	const lastNames = [
		'Smith',
		'Johnson',
		'Williams',
		'Brown',
		'Jones',
		'Garcia',
		'Miller',
		'Davis',
		'Rodriguez',
		'Martinez',
	];
	const statuses = [Status.Single, Status.Relationship, Status.Complicated];

	// Generate all data first for sorting
	const allData: Person[] = Array.from({ length: totalRows }).map((_, index) => {
		const i = index + 1;
		return {
			id: i.toString(),
			firstName: firstNames[i % firstNames.length],
			lastName: lastNames[i % lastNames.length],
			age: 20 + (i % 50),
			visits: Math.floor(Math.random() * 500) + 1,
			status: statuses[i % statuses.length],
			progress: Math.floor(Math.random() * 100) + 1,
		};
	});

	// Apply sorting if provided
	const sortedData = [...allData];
	if (sorting.length) {
		const sort = sorting[0];
		const { id, desc } = sort;
		sortedData.sort((a, b) => {
			const aValue = a[id as keyof Person];
			const bValue = b[id as keyof Person];
			if (desc) {
				return aValue < bValue ? 1 : -1;
			}
			return aValue > bValue ? 1 : -1;
		});
	}

	// Return paginated slice
	return {
		data: sortedData.slice(start, start + size),
		meta: {
			totalRowCount: sortedData.length,
		},
	};
};

/**
 * Simulates an API call with network delay
 */
export const simulateApiCall = async <T>(dataGenerator: () => T, delayMs: number = 200): Promise<T> => {
	await delay(delayMs);
	return dataGenerator();
};

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

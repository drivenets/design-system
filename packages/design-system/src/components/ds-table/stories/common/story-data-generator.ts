import { Faker, en } from '@faker-js/faker';
import type { SortingState } from '@tanstack/react-table';
import type { Person, Status } from './story-data';

const STORY_DATA_SEED = 42;

// A dedicated instance, so seeding it doesn't affect other stories that use the global `faker`.
const faker = new Faker({ locale: en });

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
	const statuses: Status[] = ['single', 'relationship', 'complicated'];

	// Re-seed on every call so each page and sort order sees the same rows (stable screenshots).
	faker.seed(STORY_DATA_SEED);

	// Generate all data first for sorting
	const allData = Array.from({ length: totalRows }).map((_, index) => {
		const i = index + 1;
		return {
			id: i.toString(),
			firstName: firstNames[i % firstNames.length] as string,
			lastName: lastNames[i % lastNames.length] as string,
			age: 20 + (i % 50),
			visits: faker.number.int({ min: 1, max: 500 }),
			status: statuses[i % statuses.length] as Status,
			progress: faker.number.int({ min: 1, max: 100 }),
		} satisfies Person;
	});

	// Apply sorting if provided
	const sortedData = [...allData];
	const sort = sorting[0];
	if (sort) {
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

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

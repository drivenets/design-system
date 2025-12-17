import { SortingState } from '@tanstack/react-table';
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
export declare const generatePersonData: (start: number, size: number, sorting: SortingState, totalRows?: number) => GeneratedDataResult;
/**
 * Simulates an API call with network delay
 */
export declare const simulateApiCall: <T>(dataGenerator: () => T, delayMs?: number) => Promise<T>;
//# sourceMappingURL=story-data-generator.d.ts.map
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import type { ColumnDef } from '@tanstack/react-table';
import DsTable from '../ds-table';
import { DsIcon } from '../../ds-icon';
import { DsTypography } from '../../ds-typography';

type Row = {
	id: string;
	description: string;
	label: string;
	link: string;
	owner: string;
	status: string;
	notes: string;
	details: string;
	comment: string;
};

const DESCRIPTION = 'Weekly backup of the core routers, kept for ninety days in the primary data center';
const LABEL = 'Mirrors the configuration of every edge router to the secondary site each night';
const LINK = 'Open the maintenance runbook for the core routers in the primary data center';
const OWNER = 'Network operations center for the primary region';
const STATUS = 'Scheduled for the next maintenance window';
const NOTES = 'Runs every Sunday at midnight and pauses during maintenance windows announced in advance';
const DETAILS =
	'Copies the running configuration of every core router to the backup server, verifies the checksum of each file, and alerts the on-call engineer when a router does not respond within five minutes';
const COMMENT = 'Approved by the change board after the second review';

const columns: ColumnDef<Row>[] = [
	{ accessorKey: 'description', header: 'Description', cell: (info) => info.getValue(), size: 200 },
	{
		accessorKey: 'label',
		header: 'Label',
		cell: (info) => <span>{info.getValue<string>()}</span>,
		size: 200,
	},
	{
		accessorKey: 'link',
		header: 'Link',
		cell: (info) => <a href="#runbook">{info.getValue<string>()}</a>,
		size: 200,
	},
	{
		accessorKey: 'owner',
		header: 'Owner',
		cell: (info) => (
			<span style={{ whiteSpace: 'nowrap' }}>
				<DsIcon icon="person" size="tiny" /> {info.getValue<string>()}
			</span>
		),
		size: 160,
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: (info) => (
			<div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
				<DsIcon icon="schedule" size="small" />
				<span>{info.getValue<string>()}</span>
			</div>
		),
		size: 220,
	},
	{
		accessorKey: 'notes',
		header: 'Notes',
		cell: (info) => (
			<DsTypography variant="body-sm-reg" truncate={2}>
				{info.getValue<string>()}
			</DsTypography>
		),
		size: 200,
	},
	{
		accessorKey: 'details',
		header: 'Details',
		cell: (info) => <div>{info.getValue<string>()}</div>,
		size: 200,
	},
	{
		accessorKey: 'comment',
		header: 'Comment',
		cell: (info) => <div>{info.getValue<string>()}</div>,
		editCell: () => null,
		size: 200,
	},
];

const data: Row[] = [
	{
		id: '1',
		description: DESCRIPTION,
		label: LABEL,
		link: LINK,
		owner: OWNER,
		status: STATUS,
		notes: NOTES,
		details: DETAILS,
		comment: COMMENT,
	},
];

const renderTable = async (virtualized: boolean) => {
	await page.render(
		<div style={{ height: 400 }}>
			<DsTable columns={columns} data={data} rowSize="large" virtualized={virtualized} />
		</div>,
	);
	await expect.element(page.getByText(DESCRIPTION)).toBeVisible();
};

const getCellContent = (text: string): HTMLElement => {
	const cell = [...document.querySelectorAll('tbody td')].find((td) => td.textContent.includes(text));
	const content = cell?.firstElementChild;
	if (!(content instanceof HTMLElement)) {
		throw new Error(`Expected cell content for "${text}"`);
	}
	return content;
};

const lineHeight = (element: HTMLElement): number => parseFloat(getComputedStyle(element).lineHeight);

const isLineClamped = (element: Element): boolean => getComputedStyle(element).webkitLineClamp !== 'none';

const getLayoutChildren = (element: Element): Element[] =>
	[...element.children].flatMap((child) =>
		getComputedStyle(child).display === 'contents' ? getLayoutChildren(child) : [child],
	);

const BLOCK_LAYOUTS = new Set(['block', 'flex', 'grid', 'table', 'list-item']);

const isBlockLayout = (element: Element): boolean => BLOCK_LAYOUTS.has(getComputedStyle(element).display);

describe.each([
	{ body: 'default', virtualized: false },
	{ body: 'virtualized', virtualized: true },
])('DsTable cell truncation ($body body)', ({ virtualized }) => {
	// WebKit collapses a line-clamped box to one line when it directly contains a flex row.
	it('never line-clamps a box that directly contains a block, flex or grid layout', async () => {
		await renderTable(virtualized);

		const clampedParents = [...document.querySelectorAll('tbody td *')].filter(
			(element) => isLineClamped(element) && getLayoutChildren(element).some(isBlockLayout),
		);

		expect(clampedParents).toEqual([]);
	});

	it.each([
		{ content: 'plain text', text: DESCRIPTION },
		{ content: 'a span', text: LABEL },
		{ content: 'a link', text: LINK },
	])('clamps $content to two lines with an ellipsis', async ({ text }) => {
		await renderTable(virtualized);

		const content = getCellContent(text);

		expect(getComputedStyle(content).textOverflow).toBe('ellipsis');
		expect(content.getBoundingClientRect().height).toBeCloseTo(2 * lineHeight(content), 0);
		expect(content.scrollHeight).toBeGreaterThan(content.clientHeight);
	});

	it('ends inline nowrap content in an ellipsis on one line', async () => {
		await renderTable(virtualized);

		const content = getCellContent(OWNER);
		const computed = getComputedStyle(content);

		expect(computed.overflow).toBe('hidden');
		expect(computed.textOverflow).toBe('ellipsis');
		expect(content.scrollWidth).toBeGreaterThan(content.clientWidth);
		expect(content.getBoundingClientRect().height).toBeLessThan(2 * lineHeight(content));
	});

	it('shows both lines of nested clamped and flex content', async () => {
		await renderTable(virtualized);

		const notes = page.getByText(NOTES).element();
		const status = page.getByText(STATUS).element();

		if (!(notes instanceof HTMLElement) || !(status instanceof HTMLElement)) {
			throw new Error('Expected nested cell content');
		}

		expect(notes.getBoundingClientRect().height).toBeCloseTo(2 * lineHeight(notes), 0);
		expect(getCellContent(STATUS).getBoundingClientRect().height).toBeCloseTo(2 * lineHeight(status), 0);
	});

	it('keeps long block content inside its cell', async () => {
		await renderTable(virtualized);

		const content = getCellContent(DETAILS);
		const cell = content.closest('td');

		if (!cell) {
			throw new Error('Expected a table cell');
		}

		expect(content.scrollHeight).toBeGreaterThan(content.clientHeight);
		expect(content.getBoundingClientRect().height).toBeLessThanOrEqual(cell.clientHeight);
	});
});

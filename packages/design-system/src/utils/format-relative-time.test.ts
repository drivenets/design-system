import { describe, expect, it, vi, afterEach } from 'vitest';
import { formatRelativeTime } from './format-relative-time';

const NOW = new Date('2025-06-15T12:00:00Z');

const minutesAgo = (minutes: number) => new Date(NOW.getTime() - minutes * 60 * 1000);
const hoursAgo = (hours: number) => new Date(NOW.getTime() - hours * 60 * 60 * 1000);
const daysAgo = (days: number) => new Date(NOW.getTime() - days * 24 * 60 * 60 * 1000);

describe('formatRelativeTime', () => {
	afterEach(() => {
		vi.useRealTimers();
	});

	const freezeTime = () => {
		vi.useFakeTimers();
		vi.setSystemTime(NOW);
	};

	it('should return "Just now" for future dates', () => {
		freezeTime();
		const futureDate = new Date(NOW.getTime() + 60_000);

		expect(formatRelativeTime(futureDate)).toBe('Just now');
	});

	it('should return "Just now" for less than 60 seconds ago', () => {
		freezeTime();
		const recent = new Date(NOW.getTime() - 30_000);

		expect(formatRelativeTime(recent)).toBe('Just now');
	});

	it('should return "Just now" at exactly 0 seconds', () => {
		freezeTime();

		expect(formatRelativeTime(NOW)).toBe('Just now');
	});

	it('should return minutes for 1-59 minutes ago', () => {
		freezeTime();

		expect(formatRelativeTime(minutesAgo(1))).toBe('1m ago');
		expect(formatRelativeTime(minutesAgo(30))).toBe('30m ago');
		expect(formatRelativeTime(minutesAgo(59))).toBe('59m ago');
	});

	it('should return hours for 1-23 hours ago', () => {
		freezeTime();

		expect(formatRelativeTime(hoursAgo(1))).toBe('1h ago');
		expect(formatRelativeTime(hoursAgo(12))).toBe('12h ago');
		expect(formatRelativeTime(hoursAgo(23))).toBe('23h ago');
	});

	it('should return days for 1-6 days ago', () => {
		freezeTime();

		expect(formatRelativeTime(daysAgo(1))).toBe('1d ago');
		expect(formatRelativeTime(daysAgo(6))).toBe('6d ago');
	});

	it('should return weeks for 1-3 weeks ago', () => {
		freezeTime();

		expect(formatRelativeTime(daysAgo(7))).toBe('1w ago');
		expect(formatRelativeTime(daysAgo(14))).toBe('2w ago');
		expect(formatRelativeTime(daysAgo(21))).toBe('3w ago');
	});

	it('should return months for 1-11 months ago', () => {
		freezeTime();

		expect(formatRelativeTime(daysAgo(30))).toBe('1mo ago');
		expect(formatRelativeTime(daysAgo(60))).toBe('2mo ago');
		expect(formatRelativeTime(daysAgo(330))).toBe('11mo ago');
	});

	it('should return years for 12+ months ago', () => {
		freezeTime();

		expect(formatRelativeTime(daysAgo(365))).toBe('1y ago');
		expect(formatRelativeTime(daysAgo(730))).toBe('2y ago');
	});

	it('should transition from weeks to months at 4 weeks (weeks cap at 3)', () => {
		freezeTime();

		expect(formatRelativeTime(daysAgo(27))).toBe('3w ago');
		expect(formatRelativeTime(daysAgo(30))).toBe('1mo ago');
	});
});

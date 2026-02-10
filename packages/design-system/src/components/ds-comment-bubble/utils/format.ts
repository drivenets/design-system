export const formatRelativeTime = (date: Date): string => {
	const now = new Date();
	const diffMs = now.getTime() - date.getTime();
	const diffMinutes = Math.floor(diffMs / (1000 * 60));
	const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
	const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
	const diffWeeks = Math.floor(diffDays / 7);
	const diffMonths = Math.floor(diffDays / 30);

	if (diffMinutes <= 1) {
		return 'Just now';
	}
	if (diffHours === 0) {
		return `${String(diffMinutes)}m ago`;
	}
	if (diffDays === 0) {
		return `${String(diffHours)}h ago`;
	}
	if (diffWeeks === 0) {
		return `${String(diffDays)}d ago`;
	}
	if (diffMonths === 0) {
		return `${String(diffWeeks)}w ago`;
	}

	return `${String(diffMonths)}mo ago`;
};

export type ChangeNote = {
	id: string;
	change: string;
	owner: string;
	notes: string;
};

const OWNERS = ['Network operations center', 'Platform team', 'Security', 'Field engineering'];

const NOTES = [
	'Weekly backup of the core routers, kept for ninety days in the primary data center and copied to the secondary site every night',
	'Staged rollout',
	'Runs every Sunday at midnight and pauses during maintenance windows announced in advance. Alerts the on-call engineer when a router does not respond within five minutes, and retries twice before opening a ticket',
	'Approved by the change board',
	'Copies the running configuration of every edge router to the backup server and verifies the checksum of each file',
];

export const generateChangeNotes = (count: number): ChangeNote[] =>
	Array.from({ length: count }, (_, index) => ({
		id: String(index + 1),
		change: `Change ${String(index + 1)}`,
		owner: OWNERS[index % OWNERS.length] ?? '',
		notes: NOTES[index % NOTES.length] ?? '',
	}));

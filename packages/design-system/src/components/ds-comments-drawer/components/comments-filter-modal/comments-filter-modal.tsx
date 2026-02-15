import { useState } from 'react';
import styles from './comments-filter-modal.module.scss';
import type { CommentsFilterModalProps } from './comments-filter-modal.types';
import { DsModal } from '../../../ds-modal';
import { DsTabs } from '../../../ds-tabs';
import { DsTypography } from '../../../ds-typography';
import { DsCheckbox } from '../../../ds-checkbox';
import { DsButton } from '../../../ds-button';
import { DsIcon } from '../../../ds-icon';
import { DsDateInput } from '../../../ds-date-input';

export const CommentsFilterModal = ({
	open,
	onOpenChange,
	filters,
	onFiltersChange,
	onApply,
	onClearAll,
	availableAuthors,
	availableLabels,
}: CommentsFilterModalProps) => {
	const [selectedTab, setSelectedTab] = useState<string>('statuses');

	const handleStatusToggle = (status: 'unresolved' | 'resolved' | 'action-required', checked: boolean) => {
		onFiltersChange({
			...filters,
			statuses: checked ? [...filters.statuses, status] : filters.statuses.filter((s) => s !== status),
		});
	};

	const handleAuthorToggle = (authorId: string, checked: boolean) => {
		onFiltersChange({
			...filters,
			authors: checked ? [...filters.authors, authorId] : filters.authors.filter((a) => a !== authorId),
		});
	};

	const handleLabelToggle = (label: string, checked: boolean) => {
		onFiltersChange({
			...filters,
			labels: checked ? [...filters.labels, label] : filters.labels.filter((l) => l !== label),
		});
	};

	const handleDateFromChange = (value: string | undefined) => {
		onFiltersChange({ ...filters, dateFrom: value });
	};

	const handleDateToChange = (value: string | undefined) => {
		onFiltersChange({ ...filters, dateTo: value });
	};

	const filterCounts = {
		statuses: filters.statuses.length,
		authors: filters.authors.length,
		dateRange: (filters.dateFrom ? 1 : 0) + (filters.dateTo ? 1 : 0),
		labels: filters.labels.length,
	};

	return (
		<DsModal open={open} onOpenChange={onOpenChange} className={styles.modal}>
			<DsModal.Header className={styles.header}>
				<div className={styles.headerLeft}>
					<DsIcon icon="filter_list" size="small" />
					<DsModal.Title>Filters</DsModal.Title>
				</div>
				<DsModal.CloseTrigger />
			</DsModal.Header>

			<DsModal.Body className={styles.body}>
				<DsTabs.Root
					value={selectedTab}
					onValueChange={(value) => {
						if (value) {
							setSelectedTab(value);
						}
					}}
					orientation="vertical"
					className={styles.tabs}
				>
					<DsTabs.List className={styles.tabList}>
						<DsTabs.Tab value="statuses">
							<DsTypography variant="body-sm-md">Status</DsTypography>
							{filterCounts.statuses > 0 && (
								<div className={styles.badge}>
									<span className={styles.dot} />
									<DsTypography variant="body-sm-reg">{filterCounts.statuses}</DsTypography>
								</div>
							)}
						</DsTabs.Tab>
						<DsTabs.Tab value="authors">
							<DsTypography variant="body-sm-md">Author</DsTypography>
							{filterCounts.authors > 0 && (
								<div className={styles.badge}>
									<span className={styles.dot} />
									<DsTypography variant="body-sm-reg">{filterCounts.authors}</DsTypography>
								</div>
							)}
						</DsTabs.Tab>
						<DsTabs.Tab value="dateRange">
							<DsTypography variant="body-sm-md">Date range</DsTypography>
							{filterCounts.dateRange > 0 && (
								<div className={styles.badge}>
									<span className={styles.dot} />
									<DsTypography variant="body-sm-reg">{filterCounts.dateRange}</DsTypography>
								</div>
							)}
						</DsTabs.Tab>
						<DsTabs.Tab value="labels">
							<DsTypography variant="body-sm-md">Labels</DsTypography>
							{filterCounts.labels > 0 && (
								<div className={styles.badge}>
									<span className={styles.dot} />
									<DsTypography variant="body-sm-reg">{filterCounts.labels}</DsTypography>
								</div>
							)}
						</DsTabs.Tab>
					</DsTabs.List>

					<DsTabs.Content value="statuses" className={styles.tabContent}>
						<div className={styles.filterSection}>
							<DsCheckbox
								label="Unresolved"
								checked={filters.statuses.includes('unresolved')}
								onCheckedChange={(checked) => handleStatusToggle('unresolved', checked === true)}
							/>
							<DsCheckbox
								label="Resolved"
								checked={filters.statuses.includes('resolved')}
								onCheckedChange={(checked) => handleStatusToggle('resolved', checked === true)}
							/>
							<DsCheckbox
								label="Action required"
								checked={filters.statuses.includes('action-required')}
								onCheckedChange={(checked) => handleStatusToggle('action-required', checked === true)}
							/>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="authors" className={styles.tabContent}>
						<div className={styles.filterSection}>
							{availableAuthors.length === 0 ? (
								<DsTypography variant="body-sm-reg" className={styles.emptyMessage}>
									No authors available
								</DsTypography>
							) : (
								availableAuthors.map((author) => (
									<DsCheckbox
										key={author.id}
										label={author.name}
										checked={filters.authors.includes(author.id)}
										onCheckedChange={(checked) => handleAuthorToggle(author.id, checked === true)}
									/>
								))
							)}
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="dateRange" className={styles.tabContent}>
						<div className={styles.filterSection}>
							<div className={styles.dateField}>
								<DsTypography variant="body-sm-md" className={styles.dateLabel}>
									From
								</DsTypography>
								<DsDateInput
									value={filters.dateFrom}
									onValueChange={handleDateFromChange}
									max={filters.dateTo}
									placeholder="Select start date"
									disablePortal
								/>
							</div>
							<div className={styles.dateField}>
								<DsTypography variant="body-sm-md" className={styles.dateLabel}>
									To
								</DsTypography>
								<DsDateInput
									value={filters.dateTo}
									onValueChange={handleDateToChange}
									min={filters.dateFrom}
									placeholder="Select end date"
									disablePortal
								/>
							</div>
						</div>
					</DsTabs.Content>
					<DsTabs.Content value="labels" className={styles.tabContent}>
						<div className={styles.filterSection}>
							{availableLabels.length === 0 ? (
								<DsTypography variant="body-sm-reg" className={styles.emptyMessage}>
									No labels available
								</DsTypography>
							) : (
								availableLabels.map((label) => (
									<DsCheckbox
										key={label}
										label={label}
										checked={filters.labels.includes(label)}
										onCheckedChange={(checked) => handleLabelToggle(label, checked === true)}
									/>
								))
							)}
						</div>
					</DsTabs.Content>
				</DsTabs.Root>
			</DsModal.Body>

			<DsModal.Footer className={styles.footer}>
				<DsButton design="v1.2" variant="filled" buttonType="secondary" onClick={onClearAll}>
					<DsIcon icon="close" size="tiny" />
					Clear all
				</DsButton>
				<DsModal.Actions>
					<DsButton design="v1.2" variant="filled" buttonType="primary" onClick={onApply}>
						Apply
					</DsButton>
				</DsModal.Actions>
			</DsModal.Footer>
		</DsModal>
	);
};

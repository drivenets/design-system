import classNames from 'classnames';
import { DsIllustration } from '../ds-illustration';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
import styles from './ds-empty-state.module.scss';
import { defaultDsEmptyStateMessages, type DsEmptyStateProps } from './ds-empty-state.types';

/**
 * Centered empty-state cluster: illustration, message, and an optional action.
 *
 * Use `noData` when the collection has no records and `noMatches` when a search
 * or filter yielded zero items. Pass `action` for a consumer-owned button.
 */
const DsEmptyState = ({
	variant = 'noData',
	message,
	illustration,
	action,
	className,
	style,
	ref,
}: DsEmptyStateProps) => {
	illustration ??= <DsIllustration variant={variant === 'noMatches' ? 'no-search-result' : 'empty-inbox'} />;
	const resolvedMessage = message ?? defaultDsEmptyStateMessages[variant];

	return (
		<div ref={ref} className={classNames(styles.root, className)} style={style} role="status">
			<DsStack direction="column" alignItems="center" justifyContent="center" gap="var(--xs)">
				<div className={styles.illustration} aria-hidden="true">
					{illustration}
				</div>
				<DsStack direction="column" alignItems="center" gap="var(--lg)">
					<DsTypography variant="body-md-reg" color="var(--color-dap-gray-700)">
						{resolvedMessage}
					</DsTypography>
					{action}
				</DsStack>
			</DsStack>
		</div>
	);
};

DsEmptyState.displayName = 'DsEmptyState';

export default DsEmptyState;

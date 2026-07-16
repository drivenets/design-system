import classNames from 'classnames';
import type { DsSiteNodeProps } from './ds-site-node.types';
import { useIsOverflowing } from './hooks/use-is-overflowing';
import { DsStack } from '../ds-stack';
import { DsTooltip } from '../ds-tooltip';
import { DsTypography } from '../ds-typography';
import styles from './ds-site-node.module.scss';

const DsSiteNode = ({
	ref,
	state = 'default',
	tier,
	siteCode,
	overflowLabel,
	className,
	style,
	'aria-label': ariaLabel,
	onClick,
}: DsSiteNodeProps) => {
	const isOverflow = state === 'overflow';
	const isSelected = state === 'selected';
	const isMuted = state === 'muted';

	const { ref: siteCodeRef, isOverflowing } = useIsOverflowing<HTMLSpanElement>(siteCode);

	return (
		<button
			ref={ref}
			type="button"
			className={classNames(
				styles.node,
				{
					[styles.selected]: isSelected,
					[styles.overflow]: isOverflow,
				},
				className,
			)}
			style={style}
			aria-label={ariaLabel}
			aria-current={isSelected ? true : undefined}
			onClick={onClick}
		>
			{isOverflow ? (
				<DsTypography variant="body-sm-reg" color="secondary">
					{overflowLabel}
				</DsTypography>
			) : (
				<>
					<DsStack
						direction="row"
						alignItems="center"
						justifyContent="center"
						className={classNames(styles.pill, { [styles.pillMuted]: isMuted })}
					>
						<DsTypography variant="body-xs-md" color={isMuted ? 'on-disabled' : 'on-action'}>
							{tier}
						</DsTypography>
					</DsStack>

					<span ref={siteCodeRef} className={styles.siteCode}>
						<DsTooltip content={isOverflowing ? siteCode : undefined}>
							<DsTypography variant="body-sm-bold" color={isSelected ? 'main' : 'secondary'}>
								{siteCode}
							</DsTypography>
						</DsTooltip>
					</span>
				</>
			)}
		</button>
	);
};

export default DsSiteNode;

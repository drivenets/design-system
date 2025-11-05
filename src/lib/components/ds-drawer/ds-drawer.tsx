import { CSSProperties, Fragment, ReactNode } from 'react';
import { Dialog } from '@ark-ui/react/dialog';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { DsDrawerProps } from './ds-drawer.types';
import styles from './ds-drawer.module.scss';
import { DsIcon } from '../ds-icon';
import { DsTypography } from '../ds-typography';

/**
 * Composable drawer component.
 * Supports grid-based sizing, flexible positioning, and compound components.
 * Use columns prop to control drawer width (1-12 grid columns).
 */
const DsDrawer = ({
	open,
	onOpenChange,
	columns = 4,
	position = 'end',
	backdrop = false,
	closeOnEscape = true,
	closeOnInteractOutside = false,
	portal = false,
	style,
	className,
	children,
}: DsDrawerProps) => {
	const handleOpenChange = (details: { open: boolean }) => {
		onOpenChange(details.open);
	};
	const Wrapper = portal ? Portal : Fragment;

	return (
		<Dialog.Root
			open={open}
			onOpenChange={handleOpenChange}
			modal={backdrop}
			closeOnEscape={closeOnEscape}
			closeOnInteractOutside={closeOnInteractOutside}
			preventScroll={backdrop}
		>
			<Wrapper>
				{backdrop && <Dialog.Backdrop className={styles.backdrop} />}
				<Dialog.Positioner className={styles.positioner}>
					<Dialog.Content
						style={style}
						className={classNames(
							styles.drawer,
							styles[`cols-${columns}`],
							styles[`position-${position}`],
							className,
						)}
					>
						<div className={styles.content}>{children}</div>
					</Dialog.Content>
				</Dialog.Positioner>
			</Wrapper>
		</Dialog.Root>
	);
};

const Header = ({
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}) => (
	<div style={style} className={classNames(styles.header, className)}>
		{children}
	</div>
);

const Title = ({
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}) => (
	<Dialog.Title className={classNames(styles.title, className)} style={style} asChild>
		<DsTypography variant="heading3">{children}</DsTypography>
	</Dialog.Title>
);

const CloseTrigger = ({ style, className }: { style?: CSSProperties; className?: string }) => (
	<Dialog.CloseTrigger style={style} className={classNames(styles.closeTrigger, className)}>
		<DsIcon icon="close" size="small" />
	</Dialog.CloseTrigger>
);

const Toolbar = ({
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}) => (
	<div style={style} className={classNames(styles.toolbar, className)}>
		{children}
	</div>
);

const Body = ({
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}) => (
	<div style={style} className={classNames(styles.body, className)}>
		{children}
	</div>
);

const Footer = ({
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}) => (
	<div style={style} className={classNames(styles.footer, className)}>
		{children}
	</div>
);

const Actions = ({
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}) => (
	<div style={style} className={classNames(styles.actions, className)}>
		{children}
	</div>
);

DsDrawer.Header = Header;
DsDrawer.Title = Title;
DsDrawer.CloseTrigger = CloseTrigger;
DsDrawer.Toolbar = Toolbar;
DsDrawer.Body = Body;
DsDrawer.Footer = Footer;
DsDrawer.Actions = Actions;

export default DsDrawer;

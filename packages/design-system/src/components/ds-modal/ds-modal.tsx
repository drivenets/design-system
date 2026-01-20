import type { CSSProperties, ReactNode } from 'react';
import { Dialog } from '@ark-ui/react/dialog';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import type { DsModalProps } from './ds-modal.types';
import styles from './ds-modal.module.scss';
import { DsIcon } from '../ds-icon';
import { DsTypography } from '../ds-typography';

/**
 * Composable modal dialog.
 * Supports custom header, footer, and body content with grid-based sizing.
 * Use columns prop to control modal width (1-12 grid columns).
 */
const DsModal = ({
	open,
	onOpenChange,
	columns = 6,
	style,
	className,
	modal = true,
	closeOnEscape,
	closeOnInteractOutside = false,
	children,
}: DsModalProps) => {
	const handleOpenChange = (details: { open: boolean }) => {
		onOpenChange(details.open);
	};

	return (
		<Dialog.Root
			open={open}
			onOpenChange={handleOpenChange}
			modal={modal}
			closeOnEscape={closeOnEscape}
			closeOnInteractOutside={closeOnInteractOutside}
		>
			<Portal>
				<Dialog.Backdrop className={styles.overlay} />
				<Dialog.Positioner>
					<Dialog.Content
						style={style}
						className={classNames(
							styles.modal,
							className,

							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							styles[`cols-${columns}`],
						)}
					>
						<div className={classNames(styles.content)}>{children}</div>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
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
	<Dialog.CloseTrigger style={style} className={className}>
		<DsIcon icon="close" size="small"></DsIcon>
	</Dialog.CloseTrigger>
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

DsModal.Header = Header;
DsModal.Title = Title;
DsModal.CloseTrigger = CloseTrigger;
DsModal.Body = Body;
DsModal.Footer = Footer;
DsModal.Actions = Actions;

export default DsModal;

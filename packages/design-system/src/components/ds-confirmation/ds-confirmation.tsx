import type { CSSProperties, ReactNode } from 'react';
import { Dialog } from '@ark-ui/react/dialog';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { DsIcon } from '../ds-icon';
import type { DsConfirmationProps } from './ds-confirmation.types';
import styles from './ds-confirmation.module.scss';
import DsTypography from '../ds-typography/ds-typography';

/**
 * Composable confirmation modal dialog.
 */
export const DsConfirmation = ({ open, onOpenChange, style, className, children }: DsConfirmationProps) => {
	const handleOpenChange = (details: { open: boolean }) => {
		onOpenChange?.(details.open);
	};

	return (
		<Dialog.Root
			open={open}
			onOpenChange={handleOpenChange}
			modal={true}
			closeOnEscape={true}
			closeOnInteractOutside={true}
		>
			<Portal>
				<Dialog.Backdrop className={styles.overlay} />
				<Dialog.Positioner>
					<Dialog.Content className={classNames(styles.modal, className)}>
						<div style={style} className={styles.content}>
							{children}
						</div>
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
		<DsTypography variant="heading4">{children}</DsTypography>
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

DsConfirmation.Header = Header;
DsConfirmation.Title = Title;
DsConfirmation.CloseTrigger = CloseTrigger;
DsConfirmation.Body = Body;
DsConfirmation.Footer = Footer;
DsConfirmation.Actions = Actions;

export default DsConfirmation;

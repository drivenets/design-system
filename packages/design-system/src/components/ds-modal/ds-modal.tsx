import { createContext, useContext, type CSSProperties, type ReactNode } from 'react';
import { Dialog } from '@ark-ui/react/dialog';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import type { DsModalLayout, DsModalProps, DsModalVariant } from './ds-modal.types';
import styles from './ds-modal.module.scss';
import { DsIcon } from '../ds-icon';
import { DsTypography } from '../ds-typography';

/**
 * Context for passing variant and layout to sub-components
 */
const DsModalContext = createContext<{ variant: DsModalVariant; layout: DsModalLayout }>({
	variant: 'default',
	layout: 'default',
});

const getVariantIcon = (variant: DsModalVariant) => {
	switch (variant) {
		case 'info':
			return <DsIcon icon="info" size="small" className={styles.headerIcon} />;
		default:
			return null;
	}
};

/**
 * Composable modal dialog.
 * Supports custom header, footer, and body content with grid-based sizing.
 * Use columns prop to control modal width (1-12 grid columns).
 */
const DsModal = ({
	open,
	columns = 6,
	variant = 'default',
	layout = 'default',
	style,
	className,
	modal = true,
	closeOnEscape,
	closeOnInteractOutside = false,
	children,
	onOpenChange,
}: DsModalProps) => {
	const handleOpenChange = (details: { open: boolean }) => {
		onOpenChange(details.open);
	};

	return (
		<DsModalContext.Provider value={{ variant, layout }}>
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
							<div
								className={classNames(styles.content, {
									[styles.divided]: layout === 'divided',
								})}
							>
								{children}
							</div>
						</Dialog.Content>
					</Dialog.Positioner>
				</Portal>
			</Dialog.Root>
		</DsModalContext.Provider>
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
}) => {
	const { variant } = useContext(DsModalContext);

	return (
		<div style={style} className={classNames(styles.header, className)}>
			{getVariantIcon(variant)}
			{children}
		</div>
	);
};

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

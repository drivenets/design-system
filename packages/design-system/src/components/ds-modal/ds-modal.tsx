import type { CSSProperties, ReactNode } from 'react';
import { Dialog } from '@ark-ui/react/dialog';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import type { DsModalFullScreenTriggerProps, DsModalProps } from './ds-modal.types';
import { DsModalContext, useDsModalContext } from './ds-modal.context';
import styles from './ds-modal.module.scss';
import { useArkDialogBodyLockCleanup } from '../../utils/use-ark-dialog-body-lock-cleanup';
import { useControlled } from '../../utils/use-controlled';
import { DsDivider } from '../ds-divider';
import { DsIcon } from '../ds-icon';
import { DsTypography } from '../ds-typography';

const noop = () => undefined;

/**
 * Composable modal dialog.
 * Supports custom header, footer, and body content with grid-based sizing.
 * Use columns prop to control modal width (1-12 grid columns), and
 * DsModal.FullScreenTrigger or the fullScreen prop to fill the viewport.
 */
const DsModalRoot = ({
	open,
	columns = 6,
	fullScreen: fullScreenProp,
	defaultFullScreen = false,
	dividers = false,
	style,
	className,
	modal = true,
	closeOnEscape,
	closeOnInteractOutside = false,
	children,
	onOpenChange,
	onFullScreenChange,
}: DsModalProps) => {
	useArkDialogBodyLockCleanup(open, modal);

	// Passing `fullScreen` makes it controlled, even without `onFullScreenChange`.
	const [fullScreen, setInternalFullScreen] = useControlled(
		fullScreenProp,
		fullScreenProp === undefined ? undefined : noop,
		defaultFullScreen,
	);

	const setFullScreen = (next: boolean) => {
		setInternalFullScreen(next);
		onFullScreenChange?.(next);
	};

	const handleOpenChange = (details: { open: boolean }) => {
		onOpenChange(details.open);
	};

	// Reopening starts from `defaultFullScreen`. No-op when controlled.
	const handleExitComplete = () => {
		setInternalFullScreen(defaultFullScreen);
	};

	return (
		<Dialog.Root
			open={open}
			onOpenChange={handleOpenChange}
			onExitComplete={handleExitComplete}
			modal={modal}
			closeOnEscape={closeOnEscape}
			closeOnInteractOutside={closeOnInteractOutside}
		>
			<Portal>
				<Dialog.Backdrop className={styles.overlay} />
				<Dialog.Positioner>
					<Dialog.Content
						style={style}
						data-full-screen={fullScreen || undefined}
						className={classNames(
							styles.modal,
							className,

							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							styles[`cols-${columns}`],
						)}
					>
						<DsModalContext.Provider value={{ fullScreen, setFullScreen }}>
							<div className={styles.content} data-dividers={dividers || undefined}>
								{children}
							</div>
						</DsModalContext.Provider>
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

/**
 * Toggles the modal between its `columns` width and full screen.
 * Place it in DsModal.Header right before DsModal.CloseTrigger; it renders its own trailing divider.
 */
const FullScreenTrigger = ({
	ref,
	style,
	className,
	'aria-label': ariaLabel,
}: DsModalFullScreenTriggerProps) => {
	const { fullScreen, setFullScreen } = useDsModalContext();

	return (
		<>
			{/* Rendered like CloseTrigger so both header icons look identical */}
			<button
				ref={ref}
				type="button"
				style={style}
				className={className}
				aria-label={ariaLabel}
				aria-pressed={fullScreen}
				onClick={() => setFullScreen(!fullScreen)}
			>
				<DsIcon icon={fullScreen ? 'close_fullscreen' : 'open_in_full'} size="small" />
			</button>
			<DsDivider orientation="vertical" className={styles.fullScreenDivider} />
		</>
	);
};

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

Header.displayName = 'DsModal.Header';
Title.displayName = 'DsModal.Title';
FullScreenTrigger.displayName = 'DsModal.FullScreenTrigger';
CloseTrigger.displayName = 'DsModal.CloseTrigger';
Body.displayName = 'DsModal.Body';
Footer.displayName = 'DsModal.Footer';
Actions.displayName = 'DsModal.Actions';

const DsModal = Object.assign(DsModalRoot, {
	displayName: 'DsModal',
	Header,
	Title,
	FullScreenTrigger,
	CloseTrigger,
	Body,
	Footer,
	Actions,
});

export default DsModal;

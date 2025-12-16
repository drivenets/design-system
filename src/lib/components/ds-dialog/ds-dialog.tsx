import type React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden';
import classNames from 'classnames';
import styles from './ds-dialog.module.scss';
import type { DsDialogProps } from './ds-dialog.types';

export const DsDialog: React.FC<DsDialogProps> = ({
	open,
	onOpenChange,
	title,
	hideTitle,
	description,
	hideDescription,
	children,
	className,
	anchorRef,
	customPosition,
	modal = true,
}) => {
	let style: React.CSSProperties = {};
	if (customPosition) {
		style = { position: 'fixed', ...customPosition };
	} else if (anchorRef?.current) {
		const rect = anchorRef.current.getBoundingClientRect();
		style = { position: 'fixed', top: rect.bottom, left: rect.left };
	}

	return (
		<RadixDialog.Root open={open} onOpenChange={onOpenChange}>
			<RadixDialog.Portal>
				{modal && <RadixDialog.Overlay className={styles.overlay} />}
				<RadixDialog.Content
					className={classNames(styles.dialog, className, {
						[styles.customPlacement]: customPosition || anchorRef,
					})}
					style={customPosition || anchorRef ? style : undefined}
				>
					<RadixDialog.Title asChild>
						{hideTitle ? (
							<VisuallyHidden>
								<RadixDialog.Title className={styles.title}>{title}</RadixDialog.Title>
							</VisuallyHidden>
						) : (
							<RadixDialog.Title className={styles.title}>{title}</RadixDialog.Title>
						)}
					</RadixDialog.Title>
					{description && (
						<RadixDialog.Description asChild>
							{hideDescription ? (
								<VisuallyHidden>
									<RadixDialog.Description className={styles.description}>
										{description}
									</RadixDialog.Description>
								</VisuallyHidden>
							) : (
								<RadixDialog.Description className={styles.description}>
									{description}
								</RadixDialog.Description>
							)}
						</RadixDialog.Description>
					)}
					{children}
				</RadixDialog.Content>
			</RadixDialog.Portal>
		</RadixDialog.Root>
	);
};

export default DsDialog;

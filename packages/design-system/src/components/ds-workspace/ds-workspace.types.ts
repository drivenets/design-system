import type { ComponentPropsWithRef } from 'react';

export interface DsWorkspaceProps extends ComponentPropsWithRef<'div'> {
	/**
	 * Whether the workspace should fill its parent height (`100%`) instead of the viewport (`100vh`).
	 * @default false
	 */
	fillParent?: boolean;
}

export type DsWorkspaceHeaderProps = ComponentPropsWithRef<'header'>;

export type DsWorkspaceSubHeaderProps = ComponentPropsWithRef<'div'>;

export type DsWorkspaceContentProps = ComponentPropsWithRef<'div'>;

export type DsWorkspaceFooterProps = ComponentPropsWithRef<'footer'>;

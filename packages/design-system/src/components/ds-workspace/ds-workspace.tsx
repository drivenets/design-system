import classNames from 'classnames';
import styles from './ds-workspace.module.scss';
import type {
	DsWorkspaceProps,
	DsWorkspaceHeaderProps,
	DsWorkspaceSubHeaderProps,
	DsWorkspaceContentProps,
	DsWorkspaceFooterProps,
} from './ds-workspace.types';

const DsWorkspace = ({ className, fillParent = false, ...rest }: DsWorkspaceProps) => (
	<div {...rest} className={classNames(styles.root, { [styles.fillParent]: fillParent }, className)} />
);

const Header = ({ className, ...rest }: DsWorkspaceHeaderProps) => (
	<header {...rest} className={classNames(styles.header, className)} />
);

const SubHeader = ({ className, ...rest }: DsWorkspaceSubHeaderProps) => (
	<div {...rest} className={classNames(styles.subHeader, className)} />
);

/** Stacking context for non-portal drawer containment. */
const Content = ({ className, ...rest }: DsWorkspaceContentProps) => (
	<div {...rest} className={classNames(styles.content, className)} />
);

const Footer = ({ className, ...rest }: DsWorkspaceFooterProps) => (
	<footer {...rest} className={classNames(styles.footer, className)} />
);

DsWorkspace.Header = Header;
DsWorkspace.SubHeader = SubHeader;
DsWorkspace.Content = Content;
DsWorkspace.Footer = Footer;

export default DsWorkspace;

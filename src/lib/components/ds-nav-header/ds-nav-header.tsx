import classNames from 'classnames';
import { DsNavHeaderProps, DsNavHeaderSectionProps } from './ds-nav-header.types';
import styles from './ds-nav-header.module.scss';

/**
 * Design system navigation header component
 * Provides context and actions for workspace/project views
 * Use composable Start/Content/End sections for flexible layouts
 */
export const DsNavHeader = ({ className, style, children }: DsNavHeaderProps) => {
	return (
		<header className={classNames(styles.navHeader, className)} style={style}>
			{children}
		</header>
	);
};

const Start = ({ className, style, children }: DsNavHeaderSectionProps) => (
	<div className={classNames(styles.start, className)} style={style}>
		{children}
	</div>
);

const Content = ({ className, style, children }: DsNavHeaderSectionProps) => (
	<div className={classNames(styles.content, className)} style={style}>
		{children}
	</div>
);

const End = ({ className, style, children }: DsNavHeaderSectionProps) => (
	<div className={classNames(styles.end, className)} style={style}>
		{children}
	</div>
);

DsNavHeader.Start = Start;
DsNavHeader.Content = Content;
DsNavHeader.End = End;

export default DsNavHeader;

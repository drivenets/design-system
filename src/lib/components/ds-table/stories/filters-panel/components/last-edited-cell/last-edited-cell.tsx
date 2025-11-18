import { DsTypography } from '@design-system/ui';
import { UserAvatar } from '../user-avatar/user-avatar';
import styles from './last-edited-cell.module.scss';

export interface LastEditedCellProps {
	editor: string;
	timestamp: string;
	colorIndex?: number;
}

export const LastEditedCell = ({ editor, timestamp, colorIndex = 0 }: LastEditedCellProps) => {
	return (
		<div className={styles.container}>
			<UserAvatar name={editor} size="small" colorIndex={colorIndex} />
			<DsTypography variant="body-sm-reg">{timestamp}</DsTypography>
		</div>
	);
};

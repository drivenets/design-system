import { DatePicker } from '@ark-ui/react/date-picker';
import { DsIcon } from '../../../ds-icon';
import { DsTypography } from '../../../ds-typography';
import styles from './calendar-view-control.module.scss';

export const CalendarViewControl = () => (
	<DatePicker.ViewControl className={styles.viewControl}>
		<DatePicker.PrevTrigger className={styles.prevTrigger}>
			<DsIcon icon="chevron_left" size="small" />
		</DatePicker.PrevTrigger>
		<DatePicker.ViewTrigger className={styles.viewTrigger}>
			<DsTypography variant="body-md-md" asChild>
				<DatePicker.RangeText />
			</DsTypography>
		</DatePicker.ViewTrigger>
		<DatePicker.NextTrigger className={styles.nextTrigger}>
			<DsIcon icon="chevron_right" size="small" />
		</DatePicker.NextTrigger>
	</DatePicker.ViewControl>
);

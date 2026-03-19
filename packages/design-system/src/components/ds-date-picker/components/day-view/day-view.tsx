import { DatePicker } from '@ark-ui/react/date-picker';
import classNames from 'classnames';
import { DsTypography } from '../../../ds-typography';
import styles from './day-view.module.scss';
import tableStyles from '../calendar-table.module.scss';
import { CalendarViewControl } from '../calendar-view-control';

export const DayView = ({ children }: { children?: React.ReactNode }) => (
	<DatePicker.View view="day">
		<DatePicker.Context>
			{(datePicker) => (
				<div className={styles.dayView}>
					<CalendarViewControl />
					<DatePicker.Table className={tableStyles.table}>
						<DatePicker.TableHead>
							<DatePicker.TableRow className={tableStyles.tableRow}>
								{datePicker.weekDays.map((weekDay, idx) => (
									<DatePicker.TableHeader key={idx} className={tableStyles.tableHeader}>
										<DsTypography variant="body-md-md">{weekDay.narrow}</DsTypography>
									</DatePicker.TableHeader>
								))}
							</DatePicker.TableRow>
						</DatePicker.TableHead>
						<DatePicker.TableBody className={tableStyles.tableBody}>
							{datePicker.weeks.map((week, weekIdx) => (
								<DatePicker.TableRow key={weekIdx} className={tableStyles.tableRow}>
									{week.map((day, dayIdx) => (
										<DatePicker.TableCell key={dayIdx} value={day}>
											<DatePicker.TableCellTrigger
												className={classNames(tableStyles.tableCellTrigger, styles.trigger)}
											>
												<DsTypography variant="body-md-md">{day.day}</DsTypography>
											</DatePicker.TableCellTrigger>
										</DatePicker.TableCell>
									))}
								</DatePicker.TableRow>
							))}
						</DatePicker.TableBody>
					</DatePicker.Table>
					{children}
				</div>
			)}
		</DatePicker.Context>
	</DatePicker.View>
);

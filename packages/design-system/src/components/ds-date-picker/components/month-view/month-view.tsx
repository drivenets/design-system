import { DatePicker } from '@ark-ui/react/date-picker';
import classNames from 'classnames';
import { DsTypography } from '../../../ds-typography';
import styles from './month-view.module.scss';
import tableStyles from '../calendar-table.module.scss';
import { CalendarViewControl } from '../calendar-view-control';

export const MonthView = () => (
	<DatePicker.View view="month">
		<DatePicker.Context>
			{(datePicker) => (
				<>
					<CalendarViewControl />
					<DatePicker.Table className={tableStyles.table}>
						<DatePicker.TableBody className={tableStyles.tableBody}>
							{datePicker.getMonthsGrid({ columns: 4, format: 'short' }).map((months, rowIdx) => (
								<DatePicker.TableRow key={rowIdx} className={tableStyles.tableRow}>
									{months.map((month, monthIdx) => (
										<DatePicker.TableCell key={monthIdx} value={month.value}>
											<DatePicker.TableCellTrigger
												className={classNames(tableStyles.tableCellTrigger, styles.trigger)}
											>
												<DsTypography variant="body-md-md">{month.label}</DsTypography>
											</DatePicker.TableCellTrigger>
										</DatePicker.TableCell>
									))}
								</DatePicker.TableRow>
							))}
						</DatePicker.TableBody>
					</DatePicker.Table>
				</>
			)}
		</DatePicker.Context>
	</DatePicker.View>
);

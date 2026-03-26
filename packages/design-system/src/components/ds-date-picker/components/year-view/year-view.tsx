import { DatePicker } from '@ark-ui/react/date-picker';
import classNames from 'classnames';
import { DsTypography } from '../../../ds-typography';
import styles from './year-view.module.scss';
import tableStyles from '../calendar-table.module.scss';
import { CalendarViewControl } from '../calendar-view-control';

export const YearView = () => (
	<DatePicker.View view="year">
		<DatePicker.Context>
			{(datePicker) => (
				<>
					<CalendarViewControl />
					<DatePicker.Table className={tableStyles.table}>
						<DatePicker.TableBody className={tableStyles.tableBody}>
							{datePicker.getYearsGrid({ columns: 4 }).map((years, rowIdx) => (
								<DatePicker.TableRow key={rowIdx} className={tableStyles.tableRow}>
									{years.map((year, yearIdx) => (
										<DatePicker.TableCell key={yearIdx} value={year.value}>
											<DatePicker.TableCellTrigger
												className={classNames(tableStyles.tableCellTrigger, styles.trigger)}
											>
												<DsTypography variant="body-md-md">{year.label}</DsTypography>
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

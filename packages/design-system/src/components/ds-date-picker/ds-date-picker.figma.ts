// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=30063-134227
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-date-picker
// component=DsDatePicker
//
// `DAP_Date picker_v1.1` only exposes a `type` variant (day/month/year calendar view),
// which is internal UI state with no code-prop equivalent. The snippet is therefore an
// illustrative controlled-usage starter (props are not derived from Figma) showing the
// idiomatic `useState` + `value`/`onChange` pattern. `fcMember`/`fcProps` are surfaced so
// a parent `DsFormControl` template can render `<DsFormControl.DatePicker />`.
import figma from 'figma';

export default {
	example: figma.code`const [value, setValue] = useState<Date | null>(null);

<DsDatePicker value={value} onChange={setValue} withTime placeholder="mm/dd/yyyy, hh:mm AM/PM" />`,
	imports: ["import { DsDatePicker } from '@drivenets/design-system';", "import { useState } from 'react';"],
	id: 'ds-date-picker',
	metadata: { nestable: true, props: { fcMember: 'DatePicker', fcProps: '' } },
} satisfies figma.Template;

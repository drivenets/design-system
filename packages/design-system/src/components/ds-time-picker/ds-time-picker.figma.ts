// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=30102-172478
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-time-picker
// component=DsTimePicker
//
// `DAP_hh_mm_drop_down_v1.0` exposes no component properties. The snippet is therefore an
// illustrative controlled-usage starter (props are not derived from Figma) showing the
// idiomatic `useState` + `value`/`onChange` pattern. `fcMember`/`fcProps` are surfaced so
// a parent `DsFormControl` template can render `<DsFormControl.TimePicker />`.
import figma from 'figma';

export default {
	example: figma.code`const [value, setValue] = useState<Date | null>(null);

<DsTimePicker value={value} onChange={setValue} placeholder="hh:mm AM/PM" />`,
	imports: ["import { DsTimePicker } from '@drivenets/design-system';", "import { useState } from 'react';"],
	id: 'ds-time-picker',
	metadata: { nestable: true, props: { fcMember: 'TimePicker', fcProps: '' } },
} satisfies figma.Template;

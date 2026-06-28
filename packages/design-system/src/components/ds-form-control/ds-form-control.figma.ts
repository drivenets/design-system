// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=13484-17388
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-form-control
// component=DsFormControl
//
// The Figma component `DAP_input/ input form unit/ vertical_v01` is the generic form-unit
// wrapper that owns the label, description and caption. Its `Swap Input to Select` slot
// holds the actual control (select, text/number/password input, ...), which is resolved
// dynamically. Inner templates that expose `metadata.props.fcMember` are linked as the
// idiomatic `DsFormControl.<member>` compound; anything else falls back to its bare snippet.
import figma from 'figma';

const instance = figma.selectedInstance;

const showLabel = instance.getBoolean('Show Label');
const showCaption = instance.getBoolean('Show Caption');
const showDescription = instance.getBoolean('Show Description');
const descriptionText = instance.getString('Description Text');

const labelInstance = instance.findInstance('input label', { traverseInstances: true });
const required = labelInstance.type === 'INSTANCE' ? labelInstance.getBoolean('Required') : false;

const labelText = instance.findText('Input label', { traverseInstances: true });
const label = labelText.type === 'TEXT' ? labelText.textContent : 'Label';

const captionInstance = instance.findInstance('inputs/ Input Caption', { traverseInstances: true });
const status =
	captionInstance.type === 'INSTANCE'
		? (captionInstance.getEnum('Status', {
				Default: 'info',
				Success: 'success',
				Error: 'error',
				Warning: 'warning',
			}) ?? 'info')
		: 'info';

// The caption text isn't bound to a component property, so read the first text layer
// inside the caption instance and pass it through as the `message` value.
const captionText =
	captionInstance.type === 'INSTANCE'
		? captionInstance.findLayers((node) => node.type === 'TEXT', { traverseInstances: true })[0]
		: undefined;
const message = captionText?.type === 'TEXT' ? captionText.textContent : 'Caption';

// Resolve the swapped control and build the `DsFormControl.<member>` child from its
// surfaced metadata. Fall back to the bare snippet when no `fcMember` is exposed.
const inner = instance.getInstanceSwap('Swap Input to Select');

let child;
if (inner && inner.type === 'INSTANCE') {
	const { example, metadata } = inner.executeTemplate();
	const fcMember = metadata?.props?.fcMember;
	const fcProps = metadata?.props?.fcProps ?? '';

	child = fcMember ? figma.code`<DsFormControl.${fcMember} ${fcProps} />` : example;
}

const description = showDescription
	? figma.code`<DsFormControl.Description>${descriptionText}</DsFormControl.Description>`
	: '';

const labelAttr = `label="${label}"`;
const requiredAttr = required ? 'required' : '';
const hideLabelAttr = showLabel ? '' : 'hideLabel';
const statusAttr = status !== 'info' ? `status="${status}"` : '';
const messageAttr = showCaption ? `message="${message}"` : '';

const formControlAttrs = [labelAttr, requiredAttr, hideLabelAttr, statusAttr, messageAttr]
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<DsFormControl ${formControlAttrs}>${description}${child}</DsFormControl>`,
	imports: ["import { DsFormControl } from '@drivenets/design-system'"],
	id: 'ds-form-control',
	metadata: { nestable: false },
} satisfies figma.Template;

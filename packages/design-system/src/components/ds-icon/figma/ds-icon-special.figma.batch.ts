import figma from 'figma';

// Batch template for Figma special icon component sets (`special-*` icons),
// where a single `type` variant selects the icon. Variants without a `DsIcon`
// equivalent are absent from `typeMap`, so `getEnum` returns undefined for them.
const instance = figma.selectedInstance;
const batch = figma.batch as { id: string; variantProp: string; typeMap: Record<string, string> };

const icon = instance.getEnum(batch.variantProp, batch.typeMap);

export default {
	example: icon
		? figma.code`<DsIcon icon="${icon}" />`
		: figma.code`{/* This icon is not available in @drivenets/design-system */}`,
	imports: ["import { DsIcon } from '@drivenets/design-system'"],
	id: batch.id,
	metadata: { nestable: true },
};

/* eslint-disable vitest/expect-expect */
import { describe, expectTypeOf, it } from 'vitest';
import type { StatusBadgeV2IconOnlyProps } from './ds-status-badge-v2.types';

describe('DsStatusBadgeV2 types', () => {
	it('allows iconOnly with a custom icon', () => {
		expectTypeOf<{ iconOnly: true; icon: () => null }>().toExtend<StatusBadgeV2IconOnlyProps>();
	});

	it('allows iconOnly without icon (phase default)', () => {
		expectTypeOf<{ iconOnly: true }>().toExtend<StatusBadgeV2IconOnlyProps>();
	});

	it('allows icon=null when iconOnly is false', () => {
		expectTypeOf<{ iconOnly: false; icon: null }>().toExtend<StatusBadgeV2IconOnlyProps>();
	});

	it('allows icon=null when iconOnly is omitted', () => {
		expectTypeOf<{ icon: null }>().toExtend<StatusBadgeV2IconOnlyProps>();
	});

	it('prevents iconOnly=true with icon=null', () => {
		expectTypeOf<{ iconOnly: true; icon: null }>().not.toExtend<StatusBadgeV2IconOnlyProps>();
	});
});

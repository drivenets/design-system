/* eslint-disable vitest/expect-expect */
import type { ReactNode } from 'react';
import { describe, expectTypeOf, it } from 'vitest';
import type { DsTagProps, TagVariant } from './ds-tag.types';

describe('DsTagProps discriminated union', () => {
	it('includes key-value in the variant union', () => {
		expectTypeOf<TagVariant>().toEqualTypeOf<'default' | 'include' | 'exclude' | 'key-value'>();
	});

	it('allows standard variants without a value', () => {
		expectTypeOf<{ label: string }>().toExtend<DsTagProps>();
		expectTypeOf<{ label: string; variant: 'default' }>().toExtend<DsTagProps>();
		expectTypeOf<{ label: string; variant: 'include' }>().toExtend<DsTagProps>();
		expectTypeOf<{ label: string; variant: 'exclude' }>().toExtend<DsTagProps>();
	});

	it('requires a value for the key-value variant', () => {
		expectTypeOf<{ label: string; variant: 'key-value'; value: string }>().toExtend<DsTagProps>();
		expectTypeOf<{ label: string; variant: 'key-value' }>().not.toExtend<DsTagProps>();
	});

	it('forbids a value on standard variants', () => {
		expectTypeOf<{ label: string; value: string }>().not.toExtend<DsTagProps>();
		expectTypeOf<{ label: string; variant: 'default'; value: string }>().not.toExtend<DsTagProps>();
		expectTypeOf<{ label: string; variant: 'include'; value: string }>().not.toExtend<DsTagProps>();
	});

	it('types the key-value value as ReactNode', () => {
		expectTypeOf<Extract<DsTagProps, { variant: 'key-value' }>['value']>().toEqualTypeOf<ReactNode>();
	});
});

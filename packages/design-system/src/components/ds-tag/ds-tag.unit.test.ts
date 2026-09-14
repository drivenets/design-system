/* eslint-disable vitest/expect-expect */
import type { ReactNode } from 'react';
import { describe, expectTypeOf, it } from 'vitest';
import type { DsTagProps, TagShape, TagVariant } from './ds-tag.types';

describe('DsTagProps discriminated union', () => {
	it('includes key-value and the filter variants in the variant union', () => {
		expectTypeOf<TagVariant>().toEqualTypeOf<
			'default' | 'include' | 'exclude' | 'key-value' | 'operator-filter' | 'query-filter'
		>();
	});

	it('exposes default and round shapes', () => {
		expectTypeOf<TagShape>().toEqualTypeOf<'default' | 'round'>();
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

	it('requires a value for the operator-filter variant', () => {
		expectTypeOf<{ label: string; variant: 'operator-filter'; value: string }>().toExtend<DsTagProps>();
		expectTypeOf<{ label: string; variant: 'operator-filter' }>().not.toExtend<DsTagProps>();
	});

	it('requires a value for the query-filter variant', () => {
		expectTypeOf<{ label: string; variant: 'query-filter'; value: string }>().toExtend<DsTagProps>();
		expectTypeOf<{ label: string; variant: 'query-filter' }>().not.toExtend<DsTagProps>();
	});

	it('forbids a value on standard variants', () => {
		expectTypeOf<{ label: string; value: string }>().not.toExtend<DsTagProps>();
		expectTypeOf<{ label: string; variant: 'default'; value: string }>().not.toExtend<DsTagProps>();
		expectTypeOf<{ label: string; variant: 'include'; value: string }>().not.toExtend<DsTagProps>();
		expectTypeOf<{ label: string; variant: 'exclude'; value: string }>().not.toExtend<DsTagProps>();
	});

	it('types every value-bearing variant as ReactNode', () => {
		expectTypeOf<Extract<DsTagProps, { variant: 'key-value' }>['value']>().toEqualTypeOf<ReactNode>();
		expectTypeOf<Extract<DsTagProps, { variant: 'operator-filter' }>['value']>().toEqualTypeOf<ReactNode>();
		expectTypeOf<Extract<DsTagProps, { variant: 'query-filter' }>['value']>().toEqualTypeOf<ReactNode>();
	});
});

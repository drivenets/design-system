import { RuleTester } from '@typescript-eslint/rule-tester';
import { noCrossComponentInternalImport } from '../no-cross-component-internal-import';

const ruleTester = new RuleTester();

ruleTester.run('no-cross-component-internal-import', noCrossComponentInternalImport, {
	valid: [
		// Barrel imports are fine.
		"import { DsIcon } from '../ds-icon';",
		"import DsButton from '../../ds-button';",
		"import { DsTable } from '../../../ds-table';",

		// Same-component relative imports are fine.
		"import { something } from './utils';",
		"import { helper } from './hooks/use-something';",
		"import styles from './ds-card.module.scss';",
		"import type { Props } from './ds-card.types';",

		// Package imports are fine.
		"import { useState } from 'react';",
		"import { random } from '@drivenets/utils';",
		"import classNames from 'classnames';",

		// Sub-component imports within the same component are fine.
		"import { DsCard } from './components/ds-card';",
	],

	invalid: [
		{
			code: "import { mergeRefs } from '../ds-table/utils/merge-refs';",
			errors: [
				{
					messageId: 'noCrossComponentInternalImport',
					data: { importPath: '../ds-table/utils/merge-refs' },
				},
			],
		},
		{
			code: "import DsButton from '../../ds-button/ds-button';",
			errors: [
				{
					messageId: 'noCrossComponentInternalImport',
					data: { importPath: '../../ds-button/ds-button' },
				},
			],
		},
		{
			code: "import type { DsButtonProps } from '../../ds-button/versions/ds-button-legacy';",
			errors: [
				{
					messageId: 'noCrossComponentInternalImport',
					data: { importPath: '../../ds-button/versions/ds-button-legacy' },
				},
			],
		},
		{
			code: "import { Table } from '../ds-table/components/core-table';",
			errors: [
				{
					messageId: 'noCrossComponentInternalImport',
					data: { importPath: '../ds-table/components/core-table' },
				},
			],
		},
		{
			code: "import type { IconType } from '../ds-icon/ds-icon.types';",
			errors: [
				{
					messageId: 'noCrossComponentInternalImport',
					data: { importPath: '../ds-icon/ds-icon.types' },
				},
			],
		},
		{
			code: "import DsIcon from '../../../ds-icon/utils/get-value';",
			errors: [
				{
					messageId: 'noCrossComponentInternalImport',
					data: { importPath: '../../../ds-icon/utils/get-value' },
				},
			],
		},
		{
			code: "export { DsIcon } from '../ds-icon/utils/get-value';",
			errors: [
				{
					messageId: 'noCrossComponentInternalImport',
					data: { importPath: '../ds-icon/utils/get-value' },
				},
			],
		},
		{
			code: "export * from '../ds-icon/utils/get-value';",
			errors: [
				{
					messageId: 'noCrossComponentInternalImport',
					data: { importPath: '../ds-icon/utils/get-value' },
				},
			],
		},
	],
});

import { RuleTester } from 'eslint';
import plugin from '../index';

const ruleTester = new RuleTester();

ruleTester.run('no-mui', plugin.rules['no-mui'], {
	valid: ['import { DsButton } from "@drivenets/design-system";', 'import { Button } from "@mui-like";'],

	invalid: [
		{
			code: 'import { Button } from "@mui/material";',
			errors: [
				{ message: 'Using MUI components is not allowed. Use DriveNets Design System components instead.' },
			],
		},
		{
			code: 'import { TextField } from "@mui/core";',
			errors: [
				{ message: 'Using MUI components is not allowed. Use DriveNets Design System components instead.' },
			],
		},
	],
});

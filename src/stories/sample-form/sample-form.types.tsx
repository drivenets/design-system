import type { FieldError, UseFormRegister } from 'react-hook-form';

export type FormData = {
	name: string;
	email: string;
	acceptTerms: boolean;
	// TODO convert to enum
	subscription: string;
};

export type FormFieldProps = {
	type: string;
	placeholder: string;
	name: ValidFieldNames;
	register: UseFormRegister<FormData>;
	error: FieldError | undefined;
	valueAsNumber?: boolean;
};

export type ValidFieldNames = 'name' | 'email' | 'acceptTerms' | 'subscription';

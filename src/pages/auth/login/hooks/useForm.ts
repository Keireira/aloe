import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import yup from '@yup';
import { yupResolver } from '@hookform/resolvers/yup';

import type { FormFields, FormKeys } from '../login.d';

const schema = yup.object().shape({
	username: yup.string().ascii('ASCII only').required('No empty field'),
	password: yup.string().min(6, '6 symbols minimum').required('Password must be provided')
});

const useFormHook = () => {
	const { register, handleSubmit, formState, trigger, setError, clearErrors, getValues } = useForm<FormFields>({
		resolver: yupResolver(schema)
	});

	useEffect(() => {
		clearErrors();
	}, []);

	return {
		username: register('username'),
		password: register('password'),
		submit: handleSubmit,
		setError,
		getValues,
		errors: formState.errors,
		revalidate: () => {
			const fields = Object.keys(formState.dirtyFields);

			if (fields.length) {
				trigger(fields as FormKeys[]);
			}
		}
	};
};

export default useFormHook;

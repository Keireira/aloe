import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import yup from '@yup';
import { yupResolver } from '@hookform/resolvers/yup';

import type { FormFields, FormKeys } from '../login.d';

const schema = yup.object().shape({
	username: yup.string().ascii('Поле может содержать только ASCII символы').required('Поле не может быть пустым'),
	password: yup.string().min(8, 'Пароль должен быть длиной от 8 символов').required('Введите пароль')
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

import { useEffect } from 'react';

import { addToast } from '@features/toaster/store';
import { setTokens, toggleAuth } from '@core/auth-manager/store';

import useFormHook from './useForm';
import useRequestHook from './useRequest';

const useLoginPage = () => {
	const form = useFormHook();
	const request = useRequestHook();

	const { isSuccess, isFetched, error } = request;

	useEffect(() => {
		if (!isSuccess) return;

		const { token, refreshToken } = request.data;

		toggleAuth(true);
		setTokens({ token, refreshToken });
	}, [isSuccess]);

	useEffect(() => {
		if (!error || !isFetched) return;

		addToast({ message: error, type: 'error' });
	}, [error, isFetched]);

	return { form, request };
};

export default useLoginPage;

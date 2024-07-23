import { useEffect } from 'react';

import { setTokens, toggleAuth } from '@core/auth-manager/store';

import useFormHook from './useForm';
import useRequestHook from './useRequest';

const useLoginPage = () => {
	const form = useFormHook();
	const request = useRequestHook();

	const { isSuccess } = request;

	useEffect(() => {
		if (!isSuccess) return;

		const { token, refreshToken } = request.data;

		toggleAuth(true);
		setTokens({ token, refreshToken });
	}, [isSuccess]);

	return { form, request };
};

export default useLoginPage;

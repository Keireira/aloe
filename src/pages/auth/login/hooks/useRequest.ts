import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';

type Payload = {
	username: string;
	password: string;
};

type ErrorResponse = {
	message: string;
};

const withError = (data: ErrorResponse) => {
	return Boolean(data?.message);
};

const getErrorMessage = (data: ErrorResponse) => {
	return data?.message;
};

const useLogin = () => {
	const payload = useRef<Payload>();

	const { isFetching, refetch, isSuccess, data, status, fetchStatus } = useQuery({
		queryKey: ['POST', '/api/auth/login'],
		queryFn: () => {
			const request = fetch('https://dummyjson.com/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...payload.current,
					expiresInMins: 30
				})
			});

			return request.then((res) => res.json());
		},
		gcTime: 0,
		enabled: false,
		retry: 0
	});

	const fetchData = (newPayload: Payload) => {
		payload.current = newPayload;
		refetch();
	};

	return {
		data,
		error: getErrorMessage(data),
		isFetching,
		isFetched: status === 'success' && fetchStatus === 'idle',
		isSuccess: isSuccess && !withError(data),
		isError: withError(data),
		fetch: fetchData
	};
};

export default useLogin;

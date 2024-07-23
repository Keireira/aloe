import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';

type Payload = {
	email: string;
	password: string;
};

const useLogin = () => {
	const payload = useRef<Payload>();

	const { isFetching, error, refetch, isSuccess, isError, data, status, fetchStatus } = useQuery({
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
		error: error,
		isFetching,
		isFetched: status === 'success' && fetchStatus === 'idle',
		isSuccess,
		isError,
		fetch: fetchData
	};
};

export default useLogin;

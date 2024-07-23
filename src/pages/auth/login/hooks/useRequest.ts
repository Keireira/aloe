import { useEffect } from 'react';

type Payload = {
	email: string;
	password: string;
};

const useLogin = () => {
	const createSessionRequest = useCreateSession();
	const { isSuccess, data } = createSessionRequest;

	useEffect(() => {
		if (!isSuccess) return;

		toggleAuth(true);
	}, [isSuccess]);

	useEffect(() => {
		const headers = data?.headers;
		if (!headers) return;

		setTokens({
			sessionToken: headers['x-session-token'],
			cableToken: headers['x-cable-token'],
			channelId: headers['x-channel-id'],
			webPushKey: headers['x-vapid-public-key']
		});
	}, [data?.headers]);

	const login = (payload: Payload) => {
		createSessionRequest.fetch(payload);
	};

	return {
		login,
		request: createSessionRequest
	};
};

export default useLogin;

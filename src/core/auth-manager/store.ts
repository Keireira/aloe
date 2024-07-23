import { createEvent, createStore } from 'effector';
import { attachInspector } from 'effector-inspector';

const withToken = window.localStorage.getItem('token');

type AuthStore = {
	isAuthorized: boolean;

	token?: string;
	refreshToken?: string;
};

// Store
export const $authStore = createStore<AuthStore>({
	isAuthorized: (window.localStorage.getItem('is_authorized') === 'true' ? true : false) || Boolean(withToken),

	token: window.localStorage.getItem('token') || undefined,
	refreshToken: window.localStorage.getItem('refresh_token') || undefined
});

// actions
export const toggleAuth = createEvent<AuthStore['isAuthorized']>();
export const setTokens = createEvent<Omit<AuthStore, 'isAuthorized'>>();

// effects
$authStore.on(toggleAuth, (store, nextValue) => {
	const newStore = { ...store };

	newStore.isAuthorized = nextValue;
	window.localStorage.setItem('is_authorized', nextValue.toString());

	return newStore;
});

$authStore.on(setTokens, (store, tokens) => {
	const newStore = { ...store };

	if (tokens.token) {
		newStore.token = tokens.token;
		window.localStorage.setItem('token', tokens.token || '');
	}

	if (tokens.refreshToken) {
		newStore.refreshToken = tokens.refreshToken;
		window.localStorage.setItem('refresh_token', tokens.refreshToken || '');
	}

	return newStore;
});

attachInspector([$authStore, toggleAuth, setTokens]);

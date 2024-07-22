const AUTH = '/auth';
const REGISTER = '/register';
const MAIN = '/main';

const ROUTES = {
	ROOT: '/',
	AUTH: {
		ROOT: AUTH,
		LOGIN: `${AUTH}/login`,
		LOGOUT: `${AUTH}/logout`
	},
	REGISTER: {
		ROOT: REGISTER
	},
	MAIN: {
		ROOT: MAIN
	}
};

export const createRoute = (route: string, params: object, search?: string) => {
	const formattedRoute = Object.entries(params).reduce((acc, [key, value]) => {
		return acc.replace(`:${key}`, value);
	}, route);

	return `${formattedRoute}${search ? search : ''}`;
};

export default ROUTES;

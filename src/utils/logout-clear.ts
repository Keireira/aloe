import ROUTES from '@routes';

const logoutClear = () => {
	window.localStorage.removeItem('session_token');
	window.localStorage.removeItem('is_authorized');
	window.localStorage.removeItem('session_token');
	window.localStorage.removeItem('cable_token');
	window.localStorage.removeItem('channel_id');
	window.localStorage.removeItem('web_push_key');
	window.localStorage.removeItem('selected_organization');

	if (window.location.pathname !== ROUTES.AUTH.LOGIN) {
		window.location.href = ROUTES.AUTH.LOGIN;
	}
};

export default logoutClear;

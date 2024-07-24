import React, { useEffect } from 'react';

import Root from './toast.styles';
import type { Props } from './toast.d';
import { removeToast } from '../store';

const Toast = ({ id, type = 'error', children }: React.PropsWithChildren<Props>) => {
	useEffect(() => {
		const timer = window.setTimeout(() => {
			removeToast(id);
		}, 4000);

		return () => {
			window.clearTimeout(timer);
		};
	}, [id]);

	const remove = () => {
		removeToast(id);
	};

	return (
		<Root $type={type} onClick={remove} role="alert">
			{children}
		</Root>
	);
};

export default React.memo(Toast);

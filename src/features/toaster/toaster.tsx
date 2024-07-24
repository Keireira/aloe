import React from 'react';
import { useUnit } from 'effector-react';

import { $toastStore, type ToastT } from './store';

import Toast from './toast';
import Root from './toaster.styles';

const Toaster = () => {
	const toastStore = useUnit($toastStore);

	return (
		<Root aria-live="assertive">
			{toastStore.query.map((toast: ToastT) => (
				<Toast key={toast.id} type={toast.type} id={toast.id}>
					{toast.message}
				</Toast>
			))}
		</Root>
	);
};

export default Toaster;

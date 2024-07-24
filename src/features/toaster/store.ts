import { createEvent, createStore } from 'effector';
import { attachInspector } from 'effector-inspector';
import { v4 as uuid } from 'uuid';

export type ToastT = {
	id: string;
	message: string;
	type: 'error';
};

export type ToastStore = {
	query: ToastT[];
};

// Store
export const $toastStore = createStore<ToastStore>({
	query: []
});

// actions
export const addToast = createEvent<Omit<ToastT, 'id'>>();
export const removeToast = createEvent<string>();
export const removeAllToasts = createEvent();

// effects
$toastStore.on(addToast, (store, nextValue) => {
	const newStore = { ...store };

	newStore.query.push({
		id: uuid(),
		...nextValue
	});

	return newStore;
});

$toastStore.on(removeToast, (store, id) => {
	const newStore = { ...store };

	newStore.query = newStore.query.filter((toast) => toast.id !== id);

	return newStore;
});

$toastStore.on(removeAllToasts, (store) => {
	const newStore = { ...store };

	newStore.query = [];

	return newStore;
});

attachInspector([$toastStore, addToast, removeToast, removeAllToasts]);

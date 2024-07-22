import { useEffect } from 'react';

const useTitle = (title: string = '') => {
	useEffect(() => {
		document.title = `Aloe | ${title}`;
	}, []);
};

export default useTitle;

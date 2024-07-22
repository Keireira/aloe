import type { AriaTextFieldProps } from 'react-aria-components';

export type InternalProps = {
	description?: string;
	isRounded?: boolean;
	error?: {
		message: string;
	};
	fill: 'full' | 'none';
};

export type StyleProps = {
	$isRounded?: InternalProps['isRounded'];
	$withErrors?: boolean;
	$fill?: string;
};

export type Props = InternalProps & AriaTextFieldProps;

import { type AriaButtonProps } from 'react-aria-components';

export type InternalProps = {
	color?: 'blue' | 'lightblue' | 'red';
	size?: 'medium' | 'large';
	to?: string;
};

export type StyleProps = {
	$color: InternalProps['color'];
	$size: InternalProps['size'];
};

export type Props = InternalProps & AriaButtonProps;

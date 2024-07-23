import React from 'react';
import { useNavigate } from 'react-router-dom';

import Root from './button.styles';

import type { Props } from './button.d';

const noop = () => {};

const Button = ({ children, to, onPress = noop, color = 'blue', size = 'large', ...restProps }: Props) => {
	const navigate = useNavigate();

	const onPressHd = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (to) {
			navigate(to);
		}

		onPress(e);
	};

	return (
		<Root $color={color} $size={size} onClick={onPressHd} {...restProps}>
			{children}
		</Root>
	);
};

export default Button;

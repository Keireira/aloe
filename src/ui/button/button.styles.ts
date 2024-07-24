import styled, { css } from 'styled-components';

import type { StyleProps } from './button.d';

const colors = {
	blue: css`
		color: oklch(var(--white));
		background-color: oklch(var(--blue-2));

		&:active {
			background-color: oklch(var(--blue-3));
		}

		&:hover {
			background-color: oklch(var(--blue-2));
			box-shadow: 0 4px 28px oklch(var(--blue-2) / 0.2);
		}
	`,
	lightblue: css`
		color: oklch(var(--blue-2));
		background-color: oklch(var(--blue-4));

		&:active {
			background-color: oklch(var(--blue-5));
		}

		&:hover {
			background-color: oklch(var(--blue-4));
			box-shadow: 0 4px 28px oklch(var(--blue-2) / 0.2);
		}
	`
};

const sizes = {
	medium: css`
		padding: 8px 12px;
	`,
	large: css`
		padding: 15px 24px;
	`
};

export default styled.button<StyleProps>`
	display: inline-flex;
	justify-content: center;
	font-weight: bold;
	font-size: 14px;
	font-family: 'Nunito Sans', sans-serif;
	line-height: 19px;
	border: none;
	border-radius: 50px;
	cursor: pointer;
	transition-timing-function: ease-out;
	transition-duration: 0.15s;
	transition-property: background-color, transform, box-shadow;

	&:active {
		transform: scale(0.97);
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.1;
		pointer-events: none;
	}

	${({ $color }) => colors[$color || 'blue']}
	${({ $size }) => sizes[$size || 'large']}
`;

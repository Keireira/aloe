import styled, { css } from 'styled-components';

import type { StyleProps } from './button.d';

const colors = {
	blue: css`
		color: oklch(100% 0 0deg);
		background-color: oklch(60% 0.203 268deg);

		&:active {
			background-color: oklch(50% 0.158 270deg);
		}

		&:hover {
			background-color: oklch(60% 0.203 268deg);
			box-shadow: 0 4px 28px oklch(59.39% 0.203 268deg / 0.22);
		}
	`,
	lightblue: css`
		color: oklch(60% 0.203 268deg);
		background-color: oklch(90% 0.05 265deg);

		&:active {
			background-color: oklch(95% 0.022 270deg);
		}

		&:hover {
			background-color: oklch(90% 0.05 265deg);
			box-shadow: 0 4px 28px oklch(59.39% 0.203 268deg / 0.22);
		}
	`,
	red: css`
		color: oklch(100% 0 0deg);
		background-color: oklch(72% 0.13 18deg);

		&:active {
			background-color: oklch(61% 0.2 23deg);
		}

		&:hover {
			background-color: oklch(72% 0.13 18deg);
			box-shadow: 0 4px 28px oklch(72.06% 0.133 18deg / 0.22);
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

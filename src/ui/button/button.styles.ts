import styled, { css } from 'styled-components';

import type { StyleProps } from './button.d';

const colors = {
	blue: css`
		color: #fff;
		background-color: #4d70f5;

		&:active,
		&[data-pressed] {
			background-color: #445abe;
		}

		&:hover {
			background-color: #4d70f5;
			box-shadow: 0 4px 28px rgba(77 112 245 / 0.22);
		}
	`,
	lightblue: css`
		color: #4d70f5;
		background-color: #d0e0ff;

		&:active,
		&[data-pressed] {
			background-color: #e8eefe;
		}

		&:hover {
			background-color: #d0e0ff;
			box-shadow: 0 4px 28px rgba(77 112 245 / 0.22);
		}
	`,
	red: css`
		color: #fff;
		background-color: #ec8085;

		&:active,
		&[data-pressed] {
			background-color: #e34148;
		}

		&:hover {
			background-color: #ec8085;
			box-shadow: 0 4px 28px rgba(236 128 133 / 0.22);
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

	&[data-pressed] {
		transform: scale(0.97);
	}

	&[data-disabled] {
		cursor: not-allowed;
		opacity: 0.1;
		pointer-events: none;
	}

	${({ $color }) => colors[$color || 'blue']}
	${({ $size }) => sizes[$size || 'large']}
`;

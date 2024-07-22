import styled, { css } from 'styled-components';
import { SmallText } from '../typography';

import type { StyleProps } from './text-field.d';

export const ErrorMessage = styled(SmallText)`
	margin-top: 8px;
	color: #eb5757;
`;

export const Label = styled.label`
	position: absolute;
	top: 17px;
	left: 16px;
	z-index: 1;
	color: #9597a0;
	font-size: 14px;
	line-height: 19px;
`;

const focused = css`
	padding: 24px 16px 10px;

	& + ${Label} {
		top: 7px;
		font-size: 12px;
		line-height: 16px;
	}
`;

export const Input = styled.input<StyleProps>`
	z-index: 2;
	width: 100%;
	margin: 0;
	padding: 17px 16px;
	color: #000;
	font-size: 14px;
	font-family: 'Nunito Sans', sans-serif;
	line-height: 19px;
	background-color: transparent;
	border: none;
	border-radius: ${({ $isRounded }) => ($isRounded ? '80px' : '8px')};

	&:not(:placeholder-shown),
	&:focus {
		${focused}
		&:autofill {
			padding: 17px 16px;
		}
	}
`;

export const InputRoot = styled.div<StyleProps>`
	position: relative;
	display: inline-flex;
	flex-direction: column;
	background-color: ${({ $fill }) => ($fill === 'full' ? '#F8FAFF' : '#fff')};
	border: 1px solid ${({ $withErrors }) => ($withErrors ? '#eb5757' : '#fff')};
	border-radius: ${({ $isRounded }) => ($isRounded ? '80px' : '8px')};
`;

export default styled.div`
	display: inline-flex;
	flex-direction: column;
`;

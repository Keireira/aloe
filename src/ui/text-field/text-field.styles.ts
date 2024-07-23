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
	color: rgba(250 250 250 / 1);
	font-size: 14px;
	font-family: 'Nunito Sans', sans-serif;
	line-height: 19px;
	background-color: transparent;
	border: none;
	border-radius: ${({ $isRounded }) => ($isRounded ? '80px' : '16px')};

	&:not(:placeholder-shown),
	&:focus {
		${focused}
		&:autofill {
			padding: 17px 16px;
			border: 1px solid #666;
			-webkit-text-fill-color: rgba(250 250 250 / 1);
			box-shadow: 0 0 0 32px rgba(51 54 67 / 1) inset;
		}
	}
`;

export const InputRoot = styled.div<StyleProps>`
	position: relative;
	display: inline-flex;
	flex-direction: column;
	background-color: ${({ $fill }) => ($fill === 'full' ? '#F8FAFF' : 'rgba(51 54 67 / 1)')};
	border: 1px solid ${({ $withErrors }) => ($withErrors ? '#eb5757' : 'transparent')};
	border-radius: ${({ $isRounded }) => ($isRounded ? '80px' : '16px')};
`;

export default styled.div`
	display: inline-flex;
	flex-direction: column;
`;

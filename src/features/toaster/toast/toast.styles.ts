import styled, { css } from 'styled-components';
import { type ToastT } from '../store';

const toastTypes = {
	error: css`
		color: var(--white);
		background-color: var(--red);
	`
};
export default styled.div<{ $type: ToastT['type'] }>`
	padding: 1em;
	border-radius: 8px;
	${({ $type }) => toastTypes[$type] || ''};
	cursor: pointer;

	& + & {
		margin-top: 1em;
	}
`;

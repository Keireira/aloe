import styled from 'styled-components';

export const Title = styled.h1`
	color: oklch(99% 0 0deg);
	font-weight: 700;
	font-size: 3rem;

	&::first-letter {
		color: oklch(74% 0.14 275deg);
	}
`;

export const SubTitle = styled.h3`
	color: oklch(99% 0 0deg);
	font-weight: 500;
	font-size: 1rem;
`;

export const Heading = styled.header`
	display: grid;
	grid-auto-flow: row;
	gap: 1rem;
	margin-bottom: 3rem;
`;

export const StyledForm = styled.form.attrs({
	method: 'post'
})`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 40vw;
`;

export const Actions = styled.div`
	display: grid;
	grid-auto-flow: column;
	gap: 2rem;
	width: 100%;
`;

export default styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 100%;
	height: 100%;
	padding-left: 8rem;
`;

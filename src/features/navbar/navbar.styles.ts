import styled from 'styled-components';

export const Title = styled.h1`
	color: #8fa0ff;
	font-size: 3rem;
	font-family: monospace;
`;

export const Content = styled.nav`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	align-items: center;
	width: 100%;
	font-weight: 900;

	@media (width >= 1024px) {
		max-width: 80vw;
	}

	@media (width >= 768px) {
		max-width: 90vw;
	}
`;

export default styled.div`
	position: sticky;
	top: 0;
	right: 0;
	left: 0;
	z-index: 1;
	display: flex;
	justify-content: center;
	padding: 2rem;
	border: none;
`;

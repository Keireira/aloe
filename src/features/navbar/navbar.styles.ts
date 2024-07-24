import styled from 'styled-components';

export const Title = styled.h1`
	color: oklch(var(--blue));
	font-size: 3rem;
	font-family: monospace;

	@media (width <= 980px) {
		font-size: 2.5rem;
	}

	@media (width <= 768px) {
		font-size: 2rem;
	}
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

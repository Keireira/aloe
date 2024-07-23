import styled from 'styled-components';

export default styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	padding-left: 128px;

	@media (width <= 980px) {
		padding-left: 64px;
	}

	@media (width <= 768px) {
		padding-right: 32px;
		padding-left: 32px;
	}
`;

import styled from 'styled-components';

import backgroundUrl from '@images/back.jpg';

export const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	width: 100%;
	height: 100%;
	background-image: url(${backgroundUrl});
	background-position: center;
	background-size: cover;
	filter: blur(1px);

	&::before {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to top, oklch(var(--blue-gray)) 0%, oklch(var(--blue-gray) / 0.75) 100%);
		content: '';
	}

	&::after {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(
			200deg,
			oklch(var(--blue-gray) / 0) 0%,
			oklch(var(--blue-gray) / 0.1) 5%,
			oklch(var(--blue-gray) / 0.3) 20%,
			oklch(var(--blue-gray) / 0.6) 30%,
			oklch(var(--blue-gray) / 0.8) 40%,
			oklch(var(--blue-gray) / 1) 100%
		);
		content: '';
	}
`;

export default styled.div`
	z-index: 0;
	width: 100%;
	height: 100%;
	background-color: oklch(var(--blue-gray));
`;

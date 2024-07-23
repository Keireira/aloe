import { createGlobalStyle } from 'styled-components';

const General = createGlobalStyle`
	:root {

	}

	html {
		background-color: oklch(28.82% 0.022 277.51deg);
	}

	body {
		font-family: 'Nunito Sans', sans-serif;
	}

	#root {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100%;
		min-height: 100%;
		margin: 0 auto;
	}

	label {
		cursor: pointer;
	}

	button, input, textarea, a {
		outline: none;

		&:focus-visible {
			box-shadow: 0 0 0 3px oklch(60.48% 0.21 257deg / 0.5);
		}
	}
`;

export default General;

import { createGlobalStyle } from 'styled-components';

const General = createGlobalStyle`
	:root {

	}

	html {
		background-color: rgba(40 42 54 / 1);
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
			box-shadow: 0 0 0 3px rgba(0 123 255 / 0.5);
		}
	}
`;

export default General;

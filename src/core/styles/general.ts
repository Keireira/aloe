import { createGlobalStyle } from 'styled-components';

const General = createGlobalStyle`
	:root {
		--white: 99% 0 0deg;
		--black: 0% 0 0deg;
		--red: 65% 0.18 24deg;
		--gray: 67% 0 275deg;
		--gray-666: 51% 0 0deg;
		--blue-gray: 29% 0.022 278deg;
		--blue-gray-dark: 33% 0.025 275deg;
		--blue-focus: 60% 0.2 257deg;
		--blue: 74% 0.14 275deg;
		--blue-2: 60% 0.2 270deg;
		--blue-3: 50% 0.15 270deg;
		--blue-4: 90% 0.05 270deg;
		--blue-5: 95% 0.02 270deg;
	}

	html {
		background-color: oklch(var(--blue-gray));
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
			box-shadow: 0 0 0 3px oklch(var(--blue-focus) / 0.5);
		}
	}
`;

export default General;

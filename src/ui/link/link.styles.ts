import styled from 'styled-components';

export default styled.a`
	color: oklch(var(--blue));
	font-weight: 800;
	font-size: inherit;
	text-decoration: none;
	outline: none;
	cursor: pointer;

	&:link {
		color: oklch(var(--blue));
	}

	&:visited {
		color: oklch(var(--blue));
	}

	&:hover {
		color: oklch(var(--blue));
	}

	&:active {
		color: oklch(var(--blue));
	}
`;

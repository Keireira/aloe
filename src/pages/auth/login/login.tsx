import React from 'react';

import ROUTES from '@routes';
import { useLogin } from './hooks';

import { TextField, Button, Link } from '@ui';

import Root, { StyledForm, Actions, Heading, Title, SubTitle } from './login.styles';

const Login = () => {
	const form = useLogin();

	const onSubmit = () => {
		const values = form.getValues();

		// request.fetch(values);
		console.log(values);
	};

	return (
		<Root>
			<Heading>
				<Title>Reveal the secrets</Title>

				<SubTitle>
					Have no account yet, huh? <Link to={ROUTES.REGISTER.ROOT}>Start wearing our tinfoil hat now!</Link>
				</SubTitle>
			</Heading>

			<StyledForm onSubmit={form.submit(onSubmit)} onChange={form.revalidate}>
				<TextField
					aria-label="E-Mail"
					placeholder="E-Mail"
					id="email"
					type="email"
					autoComplete="email"
					required
					error={form.errors.email}
					{...form.email}
				/>

				<TextField
					aria-label="Password"
					placeholder="Password"
					id="password"
					required
					autoComplete="current-password"
					type="password"
					error={form.errors.password}
					{...form.password}
				/>

				<Actions>
					<Button aria-label="Demo Sign In" type="button" color="lightblue">
						Demo Sign In
					</Button>

					<Button aria-label="Sign In" type="submit">
						Sign In
					</Button>
				</Actions>
			</StyledForm>
		</Root>
	);
};

export default Login;

import React from 'react';

import ROUTES from '@routes';
import useLogin from './hooks';

import { TextField, Button, Link } from '@ui';

import Root, { StyledForm, Actions, Heading, Title, SubTitle } from './login.styles';

const Login = () => {
	const { form, request } = useLogin();

	const onSubmit = () => {
		const values = form.getValues();

		request.fetch(values);
	};

	const isSubmitBtnDisabled = Boolean(form.errors.password || form.errors.username) || request.isFetching;

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
					aria-label="Username"
					placeholder="Username"
					id="username"
					type="text"
					autoComplete="username"
					required
					error={form.errors.username}
					{...form.username}
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
						Demo
					</Button>

					<Button aria-label="Sign In" type="submit" disabled={isSubmitBtnDisabled}>
						Sign In
					</Button>
				</Actions>
			</StyledForm>
		</Root>
	);
};

export default Login;

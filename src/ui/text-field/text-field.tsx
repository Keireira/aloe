import React, { useId } from 'react';
import type { Props } from './text-field.d';

import Root, { InputRoot, Input, Label, ErrorMessage } from './text-field.styles';

const TextField = React.forwardRef<HTMLInputElement, Props>(
	({ isRounded, placeholder, label, onChange, error, fill = 'none', ...restProps }, ref) => {
		const id = useId();
		const withErrors = Boolean(error);

		return (
			<Root>
				<InputRoot $fill={fill} $withErrors={withErrors} $isRounded={isRounded}>
					{/* " " is Safari hack */}
					<Input ref={ref} onInput={onChange} {...restProps} placeholder=" " id={id} $isRounded={isRounded} />

					<Label htmlFor={id}>{label || placeholder}</Label>
				</InputRoot>

				{withErrors && <ErrorMessage>{error.message}</ErrorMessage>}
			</Root>
		);
	}
);

export default TextField;

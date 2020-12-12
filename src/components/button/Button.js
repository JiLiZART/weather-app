import React from 'react';
import { Body } from './buttonStyles';

const Button = ({ children, rounded, state = 'primary', type = 'solid', ...props }) => (
	<Body {...props} state={state} type={type} rounded={rounded} htmlType="button">
		{children}
	</Body>
);

Button.Secondary = ({ children, ...props }) => (
	<Button {...props} state="secondary">{children}</Button>
);

Button.Secondary.displayName = 'Button.Secondary';

Button.Primary = ({ children, ...props }) => (
	<Button {...props} state="primary">{children}</Button>
);

Button.Primary.displayName = 'Button.Primary';

export default Button;

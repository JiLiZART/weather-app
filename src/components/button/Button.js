import React from 'react';
import { Body } from './buttonStyles';

const Button = ({ children, rounded, state = 'primary', type = 'solid', onClick }) => (
	<Body state={state} type={type} rounded={rounded} onClick={onClick}>
		{children}
	</Body>
);

Button.Secondary = ({ children, ...props }) => (
	<Button {...props} state="secondary">{children}</Button>
);

Button.Secondary.displayName = 'Button.Secondary';

export default Button;

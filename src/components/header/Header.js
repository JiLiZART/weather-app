import React from 'react';
import { Centered } from './headerStyles';

const Header = ({ children }) => (
	<Centered>
		{children}
	</Centered>
);

export default Header;

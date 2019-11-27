import React from 'react';
import styled from '@emotion/styled';

const Centered = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 32px;
`;

const Header = ({ children }) => (
	<Centered>
		{children}
	</Centered>
);

export default Header;

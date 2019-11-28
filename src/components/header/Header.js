import React from 'react';
import styled from '@emotion/styled';
import { colorInputGray300 } from '../variables';

const Centered = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 32px;
	
	:before,
	:after {
		position: absolute;
		top: 50%;
		display: block;
		content: '';
		width: calc(50% - 40px);
		height: 1px;
		transform: translateY(50%);
		background: ${colorInputGray300};
	}
	
	:before {
		left: 0;
	}
	
	:after {
		right: 0;
	}
`;

const Header = ({ children }) => (
	<Centered>
		{children}
	</Centered>
);

export default Header;

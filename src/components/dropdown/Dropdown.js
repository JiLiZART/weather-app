import React from 'react';
import styled from '@emotion/styled';
import { colorLight } from '../variables';

const Body = styled.div`
	background: ${colorLight};
	box-shadow: 0 6px 12px rgba(28, 7, 19, 0.1), 0 0 1px rgba(28, 7, 19, 0.2);
	border-radius: 8px;
	overflow: hidden;
`;

const Dropdown = ({ children }) => (
	<Body>{children}</Body>
);

export default Dropdown;

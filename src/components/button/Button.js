import React from 'react';
import styled from '@emotion/styled';
import { colorGray300, colorPurple100 } from '../variables';

const colors = {
	primary: colorPurple100,
	secondary: colorGray300,
};

const type = {
	solid: {
		primary: {
			border: `1px solid transparent`,
			background: `${colors.primary}`
		},
		secondary: {
			border: `1px solid transparent`,
			background: `${colors.secondary}`
		}
	},
	outline: {
		primary: {
			border: `1px solid ${colors.primary}`,
			background: 'transparent'
		},
		secondary: {
			border: `1px solid ${colors.secondary}`
		}
	}
};

const size = {
	md: '48px'
};

const Body = styled.button`
	appearance: none;
	-webkit-appearance: none;
	text-align: center;
	justify-content: center;
	background-color: transparent;
	cursor: default;
	display: inline-flex;
	align-items: center;
	vertical-align: baseline;
	border: 0;
	margin: 0;
	padding: 12px;
	white-space: nowrap;
	position: relative;
	user-select: none;
	line-height: ${props => size[props.size] || size.md};
	font-family: inherit;
	text-decoration: none;
	background: ${props => type[props.type][props.state].background};
	border: ${props => type[props.type][props.state].border}
`;

const Button = ({ children, state, type = 'solid' }) => (
	<Body state={state} type={type}>
		{children}
	</Body>
);

export default Button;

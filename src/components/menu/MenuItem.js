import React from 'react';
import styled from '@emotion/styled';
import { colorGray100, colorGray300, colorGray400, colorGray500, fontSeconday, fontSizeSecondary } from '../variables';

const Item = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	
	padding: 20px 24px;
	cursor: ${props => props.onClick ? 'pointer' : 'default'};
	background: ${props => props.isActive ? colorGray100 : 'transparent'};

	:last-of-type {
		border-bottom-color: transparent;
	}
	
	:hover {
		background: ${colorGray100};
	}
	
	:after {
		content: '';
		height: 1px;
		background: ${colorGray300};
		position: absolute;
		bottom: 0;
		left: 24px;
		right: 24px;
	}
`;

const Body = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
`;

const Actions = styled.div`
	display: flex;
	align-items: start;
`;

const Title = styled.div`
	font-family: ${fontSeconday};
	font-size: ${fontSizeSecondary};
	line-height: 1.5;
	color: ${colorGray500};
`;

const Meta = styled.div`
	font-family: ${fontSeconday};
	font-size: 14px;
	line-height: 1.43;
	color: ${colorGray400};
`;

const MenuItem = ({ title, meta, Action, onClick, isActive }) => (
	<Item onClick={onClick} isActive={isActive}>
		<Body>
			<Title>{title}</Title>
			<Meta>{meta}</Meta>
		</Body>
		<Actions>{Action}</Actions>
	</Item>
);

export default MenuItem;

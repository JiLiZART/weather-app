import React from 'react';
import styled from '@emotion/styled';
import MenuItem from './MenuItem';

const Body = styled.div`
	display: flex;
	flex-direction: column;
`;

const Menu = ({ items = [], renderItem, activeIndex, ...props }) => (
	<Body>
		{items.map((item, index) => renderItem({ index, isActive: activeIndex === index, item, props }))}
	</Body>
);

Menu.Item = MenuItem;

export default Menu;

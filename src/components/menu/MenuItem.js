import React from 'react';
import { Actions, Body, Item, Meta, Title } from './menuItemStyles';

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

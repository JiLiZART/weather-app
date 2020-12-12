import React from 'react';
import { Body, Text, Title } from './notFoundStyles';
import Button from '../button/Button';

const NotFound = ({ state, error, onAdd, addText }) => (
	<Body>
		<Title state={state}>{error.title}</Title>
		<Text state={state}>{error.text}</Text>
		{onAdd && <Button.Primary tabIndex="-1" onClick={onAdd}>{addText}</Button.Primary>}
	</Body>
);

NotFound.defaultProps = {
	state: 'secondary'
};

export default NotFound;

import React from 'react';
import { Body, Text, Title } from './notFoundStyles';

const NotFound = ({ error }) => (
	<Body><Title>{error.title}</Title><Text>{error.text}</Text></Body>
);

export default NotFound;

import React from 'react';

const NotFound = ({ error }) => (
	<div>{error.title} <br /> {error.text}</div>
);

export default NotFound;

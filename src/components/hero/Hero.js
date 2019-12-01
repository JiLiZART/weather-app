import React from 'react';
import { Actions, Body, Content, Description, Title } from './heroStyles';

const Hero = ({ title, description, Actions: AComp }) => (
	<Body>
		<Title>{title}</Title>
		<Content>
			<Description>{description}</Description>
			{AComp && <Actions>{AComp}</Actions>}
		</Content>
	</Body>
);

export default Hero;

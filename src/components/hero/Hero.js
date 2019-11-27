import React from 'react';
import styled from '@emotion/styled';
import {
	colorGray400,
	colorGray500,
	fontPrimary,
	fontSizePrimary,
	fontSizeSecondary,
	sizeMd,
	sizeXxl
} from '../variables';

const Body = styled.div`
	margin-bottom: ${sizeXxl};
`;

const Title = styled.div`
	font-family: ${fontPrimary};
	font-style: normal;
	font-weight: normal;
	font-size: ${fontSizePrimary};
	line-height: 1;
	color: ${colorGray500};
	margin-bottom: ${sizeMd};
`;

const Content = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap-reverse;
`;

const Description = styled.div`
	font-family: ${fontPrimary};
	font-style: normal;
	font-weight: normal;
	font-size: ${fontSizeSecondary};
	line-height: 1.5;
	color: ${colorGray400};
	max-width: 480px;
`;

const Actions = styled.div`
	margin-left: auto;
	max-width: 352px;
`;

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

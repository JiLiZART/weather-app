import React from 'react';
import { keyframes, css } from '@emotion/core';
import styled from '@emotion/styled';
import {
	breakpointMobile,
	colorGray300,
	colorGray400,
	colorGray500,
	colorPurple100,
	fontSeconday,
	fontSizeHero,
	fontSizeSecondary,
	fontSizeThird, sizeLg, sizeMd,
	sizeXl,
	sizeXxl
} from '../variables';
import Icon from '../icon/Icon';

const remove = keyframes`
  from {
    transform: scale(1, 1);
  }
  
  30% {
    transform: scale(1.1, 1.1);
  }

  99% {
    transform: scale(0, 0);
    height: 0;
  }
  
  to {
    height: 0;
    opacity: 0;
  }
`;

const removeCss = props => props.isRemoved ? css`
  animation: 0.3s ease-in-out 0.1s ${remove}
` : null;

const Header = styled.div`
	min-height: 168px;
	padding: ${sizeXl} ${sizeXxl} 0;
`;

const Title = styled.div`
	color: ${colorPurple100};
	font-family: ${fontSeconday};
	font-size: ${fontSizeThird};
	line-height: 1.43;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	margin-bottom: ${sizeLg};
`;

const Temp = styled.div`
	display: flex;
	flex-direction: row;
`;

const TempName = styled.div`
	font-family: ${fontSeconday};
	font-size: ${fontSizeHero};
	line-height: 100%;
	color: ${colorGray500};
`;

const TempImage = styled.img`
	width: 48px;
	height: 48px;
`;

const Type = styled.div`
	font-family:  ${fontSeconday};
	font-size: ${fontSizeThird};
	line-height: 1.43;
	color: ${colorGray400};
`;

export const Body = styled.div`
	position: relative;
	width: 100%;
	max-width: 100%;

	background: #FFFFFF;
	border-radius: 24px;
	transition: transform .2s ease-in-out;
	margin-bottom: 24px;
	${removeCss}
	
	@media (min-width: ${breakpointMobile}) {
		max-width: 480px;
	}
`;

const Meta = styled.div`
	display: flex;
	flex-direction: row;
	padding: ${sizeXl} ${sizeXxl};
	height: 72px;
	box-sizing: border-box;
	border-top: 1px solid ${colorGray300};
	
	@media (min-width: ${breakpointMobile}) {
		padding: ${sizeXl} ${sizeXxl};
	}
`;

const MetaItem = styled.div`
	display: flex;
	flex-direction: row;
	font-family: ${fontSeconday};
	font-size: ${fontSizeSecondary};
	line-height: 1.5;
	color: ${colorGray500};
	margin-right: ${sizeMd};
	white-space: nowrap;

	&:last-of-type {
		margin-right: 0;
	}
	
	@media (min-width: ${breakpointMobile}) {
		margin-right: ${sizeXxl};
	}
`;

export const Card = ({ title, temp, weather, wind, humidity, pressure, icon }) => (
	<Body>
		<Header>
			<Title>{title}</Title>
			<Temp>
				<TempName>{temp}</TempName>
				<TempImage src={icon} />
			</Temp>
			<Type>{weather}</Type>
		</Header>
		<Meta>
			<MetaItem><Icon.Wind />{wind}</MetaItem>
			<MetaItem><Icon.Humidity />{humidity}</MetaItem>
			<MetaItem><Icon.Pressure />{pressure}</MetaItem>
		</Meta>
	</Body>
);

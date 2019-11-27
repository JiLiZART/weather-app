import React from 'react';
import { keyframes, css } from '@emotion/core';
import styled from '@emotion/styled';
import { colorGray500, colorPurple100, fontSeconday, fontSizeHero, fontSizeThird } from '../variables';

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

const Title = styled.div`
	color: ${colorPurple100};
	font-family: ${fontSeconday};
	font-size: ${fontSizeThird};
	line-height: 1.43;
	letter-spacing: 0.08em;
	text-transform: uppercase;
`;

const Temp = styled.div`
	font-family: ${fontSeconday};
	font-size: ${fontSizeHero};
	line-height: 100%;
	color: ${colorGray500};
`;

export const Body = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  height: 241px;

  background: #FFFFFF;
  border-radius: 24px;
  transition: transform .2s ease-in-out;
  margin-bottom: 24px;
  ${removeCss}
`;

const Meta = styled.div`
  border-top: 1px solid #E4E0DF
`;

export const Card = ({ title, temp }) => (
	<Body>
		<Title>{title}</Title>
		<Temp>{temp}</Temp>
		<Meta>
			1
		</Meta>
	</Body>
);

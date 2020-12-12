/* eslint-disable no-unused-vars */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

import {
	breakpointMobile,
	breakpointTablet,
	colorGray300,
	colorGray400,
	colorGray400T25,
	colorGray500,
	colorLight,
	colorPurple100,
	fontSeconday,
	fontSizeHero,
	fontSizeSecondary,
	fontSizeThird,
	sizeLg,
	sizeMd,
	sizeXl,
	sizeXxl,
	sizeXxs
} from '../variables';

function getScale(value) {
	return `scale(${value}, ${value ** 2})`;
}

export const transitions = {
	enter: css`
            opacity: 0;
            transform: ${getScale(1)};
          `,
	enterActive: css`
            opacity: 1;
  			transition: opacity 500ms ease-in;
  			transform: ${getScale(1)};
          `,
	exit: css`
            opacity: 1;
            transform: ${getScale(1)};
          `,
	exitActive: css`
            opacity: 0;
            transform: ${getScale(0.75)};
            transition: opacity 250ms ease-in;
          `
};

export const Body = styled.article`
	label: card;
	position: relative;
	width: 100%;
	max-width: 100%;

	background: ${colorLight};
	border-radius: ${sizeXl};
	margin-bottom: ${sizeXl};
	transition: box-shadow 250ms ease-in;

	:focus-within {
		outline: none;
		box-shadow: 0 0 0 0.25rem ${colorGray400T25};
	}

	@media (min-width: ${breakpointMobile}) {
		max-width: calc(50% - ${sizeMd});
	}

	@media (min-width: ${breakpointTablet}) {
		max-width: 480px;
	}
`;

export const Header = styled.div`
	label: header;
	position: relative;
	min-height: 144px;
	padding: ${sizeXl} ${sizeXxl} 0;
`;

export const Title = styled.div`
	label: title;
	color: ${colorPurple100};
	font-family: ${fontSeconday};
	font-size: ${fontSizeThird};
	line-height: 1.43;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	margin-bottom: ${sizeLg};
`;

export const Temp = styled.div`
	label: temp;
	display: flex;
	flex-direction: row;
	margin-bottom: ${sizeXxs};
`;

export const Actions = styled.div`
	label: actions;
	position: absolute;
	top: ${sizeXl};
	right: ${sizeXl};
`;

export const TempName = styled.div`
	label: tempName;
	font-family: ${fontSeconday};
	font-size: ${fontSizeHero};
	line-height: 100%;
	color: ${colorGray500};
	margin-right: ${sizeMd};
`;

export const TempImage = styled.img`
	label: tempImage;
	width: 48px;
	height: 48px;
`;

export const Type = styled.div`
	label: type;
	font-family:  ${fontSeconday};
	font-size: ${fontSizeThird};
	line-height: 1.43;
	color: ${colorGray400};
`;

export const Meta = styled.div`
	label: meta;
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

export const MetaItem = styled.div`
	label: metaItem;
	display: flex;
	flex-direction: row;
	font-family: ${fontSeconday};
	font-size: ${fontSizeSecondary};
	line-height: 1.5;
	color: ${colorGray500};
	margin-right: ${sizeMd};
	white-space: nowrap;
	letter-spacing: 1.1px;

	&:last-of-type {
		margin-right: 0;
	}
	
	@media (min-width: ${breakpointMobile}) {
		margin-right: ${sizeXxl};
	}
`;

import styled from '@emotion/styled';

import {
	breakpointMobile,
	colorGray300,
	colorGray400,
	colorGray500,
	colorPurple100,
	fontSeconday,
	fontSizeHero, fontSizeSecondary,
	fontSizeThird,
	sizeLg, sizeMd,
	sizeXl,
	sizeXxl,
	sizeXxs
} from '../variables';

export const Body = styled.div`
	label: card;
	position: relative;
	width: 100%;
	max-width: 100%;

	background: #FFFFFF;
	border-radius: 24px;
	transition: transform .2s ease-in-out;
	margin-bottom: 24px;
	
	@media (min-width: ${breakpointMobile}) {
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

import styled from '@emotion/styled';
import {
	breakpointMobile,
	colorGray400,
	colorGray500,
	fontPrimary,
	fontSizePrimary,
	fontSizeSecondary,
	sizeMd, sizeXs,
	sizeXxl
} from '../variables';

export const Body = styled.div`
	label: hero;
	margin-bottom: ${sizeXxl};
`;

export const Title = styled.div`
	label: title;
	font-family: ${fontPrimary};
	font-style: normal;
	font-weight: normal;
	font-size: ${fontSizePrimary};
	line-height: 1;
	color: ${colorGray500};
	margin-bottom: ${sizeXs};
	text-align: center;

	@media (min-width: ${breakpointMobile}) {
		text-align: left;
		margin-bottom: ${sizeMd};
	}
`;

export const Content = styled.div`
	label: content;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const Description = styled.div`
	label: description;
	font-family: ${fontPrimary};
	font-style: normal;
	font-weight: normal;
	font-size: ${fontSizeSecondary};
	line-height: 1.5;
	color: ${colorGray400};
	max-width: 480px;
	margin-bottom: ${sizeXs};
	text-align: center;
	
	@media (min-width: ${breakpointMobile}) {
		text-align: left;
		margin-bottom: 0;
	}
`;

export const Actions = styled.div`
	label: actions;
	max-width: 100%;
	text-align: center;
	width: 100%;
	
	@media (min-width: ${breakpointMobile}) {
		text-align: left;
		max-width: 352px;
		margin-left: auto;
	}
`;

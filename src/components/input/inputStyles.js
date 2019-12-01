import styled from '@emotion/styled';

import {
	breakpointMobile,
	colorGray500,
	colorInputGray300,
	colorLight,
	colorPurple100,
	fontSeconday,
	fontSizeSecondary
} from '../variables';

export const Content = styled.div`
	display: flex;
	border-radius: 8px;
	background: ${colorInputGray300};
	height: 48px;
	padding: 0;
	overflow: hidden;
	box-sizing: border-box;
`;

export const Post = styled.div`
`;

export const Pre = styled.div`
`;

export const BaseInput = styled.input`
	width: 100%;
	margin: 12px 16px;
	border: 0;
	padding: 0;
	font-family: inherit;
	box-shadow: none;
	background: transparent;
	-webkit-appearance: none;
	min-width: 100%;
	display: flex;

	font-family: ${fontSeconday};
	font-size: ${fontSizeSecondary};
	line-height: 1.5;

	color: ${colorGray500};
	
	:focus {
		outline: none;
	}
	
	::selection {
		color: ${colorLight};
		background: ${colorPurple100};
	}
	
	@media (min-width: ${breakpointMobile}) {
		min-width: 272px;
	}
`;

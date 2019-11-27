import React from 'react';
import styled from '@emotion/styled';

import {
	colorGray500,
	colorInputGray300,
	colorLight,
	colorPurple100,
	fontSeconday,
	fontSizeSecondary
} from '../variables';

const Content = styled.div`
	display: flex;
	border-radius: 8px;
	background: ${colorInputGray300};
	height: 48px;
	padding: 0;
	overflow: hidden;
	box-sizing: border-box;
`;

const Post = styled.div`
`;

const Pre = styled.div`
`;

const BaseInput = styled.input`
	width: 100%;
	margin: 12px 16px;
	border: 0;
	padding: 0;
	font-family: inherit;
	box-shadow: none;
	background: transparent;
	-webkit-appearance: none;
	min-width: 272px;
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
`;

const Input = ({ Postfix, Prefix, ...props }) => (
	<Content>
		{Prefix && <Pre>{Prefix}</Pre>}
		<BaseInput type="text" {...props} />
		{Postfix && <Post>{Postfix}</Post>}
	</Content>
);

export default Input;

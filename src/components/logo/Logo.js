import React from 'react';
import styled from '@emotion/styled';

const LogoElement = styled.div`
	margin: 0 16px;
`;

const Logo = ({}) => (
	<LogoElement>
		<svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M47 24c0 12.703-10.297 23-23 23S1 36.703 1 24 11.297 1 24 1s23 10.297 23 23zm1 0c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0s24 10.745 24 24zm-6 0c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18zm-28.225-5.799l.137-1.064h6.172l-.088 1.074-1.338.283.918 8.526.225 2.03.771-2.03 2.979-7.14-.127-1.405-1.563-.274.098-1.064h6.406l-.088 1.074-1.465.264.82 8.544.07 2.032.839-2.031 3.662-8.545-2.217-.264.098-1.074h5.8l-.097 1.064-1.562.264-6.377 13.633H24.82l-.879-9.121-3.798 9.12h-2.998l-2.022-13.622-1.348-.274z" fill="#730641"/></svg>
	</LogoElement>
);

export default Logo;

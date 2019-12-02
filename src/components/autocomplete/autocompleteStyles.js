import styled from '@emotion/styled';

export const Wrapper = styled.div`
	position: relative;
`;

export const Body = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Autocomlete = styled.div`
	position: absolute;
	left: 0;
	top: 8px;
	width: 100%;
	z-index: 11;
`;

import styled from '@emotion/styled';
import { colorGray400, colorGray500, fontSeconday, fontSizeSecondary, fontSizeThird } from '../variables';

export const Body = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 84px;
`;

export const Title = styled.div`
	font-family: ${fontSeconday};
	font-size: ${fontSizeSecondary};
	font-weight: bold;
	line-height: 1.5;
	display: flex;
	align-items: center;
	text-align: center;
	color: ${colorGray500};
`;

export const Text = styled.div`
	font-family: ${fontSeconday};
	font-size: ${fontSizeThird};
	line-height: 1.43;
	display: flex;
	align-items: center;
	text-align: center;
	color: ${colorGray400};
`;

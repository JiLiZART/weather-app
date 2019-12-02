import styled from '@emotion/styled';
import {
	colorGray100,
	colorGray300,
	colorGray400,
	colorGray500,
	fontSeconday,
	fontSizeSecondary,
	sizeLg,
	sizeXl
} from '../variables';

export const Item = styled.div`
	label: menuItem;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	
	padding: ${sizeLg} ${sizeXl};
	cursor: ${props => props.onClick ? 'pointer' : 'default'};
	background: ${props => props.isActive ? colorGray100 : 'transparent'};

	:hover {
		background: ${colorGray100};
	}
	
	:after {
		content: '';
		height: 1px;
		background: ${colorGray300};
		position: absolute;
		bottom: 0;
		left: 24px;
		right: 24px;
	}

	:last-of-type:after {
		background: transparent;
	}
`;

export const Body = styled.div`
	label: body;
	display: flex;
	flex-direction: column;
	align-items: start;
`;

export const Actions = styled.div`
	label: title;
	display: flex;
	align-items: center;
`;

export const Title = styled.div`
	label: title;
	font-family: ${fontSeconday};
	font-size: ${fontSizeSecondary};
	line-height: 1.5;
	color: ${colorGray500};
`;

export const Meta = styled.div`
	label: meta;
	font-family: ${fontSeconday};
	font-size: 14px;
	line-height: 1.43;
	color: ${colorGray400};
`;

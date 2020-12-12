import styled from '@emotion/styled';
import {
	colorGray400,
	colorGray500,
	fontPrimary, fontSeconday,
	fontSizePrimary, fontSizeSecondary,
	fontSizeThird,
	sizeXl
} from '../variables';

const states = {
	primary: {
		title: {
			fontFamily: fontPrimary,
			fontSize: fontSizePrimary
		},
		text: {
			fontFamily: fontPrimary
		}
	},
	secondary: {
		title: {
			fontFamily: fontSeconday,
			fontSize: fontSizeSecondary
		},
		text: {
			fontFamily: fontSeconday
		}
	}
};

export const Body = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 84px;
	padding: ${sizeXl};
`;

export const Title = styled.div`
	font-family: ${props => states[props.state].title.fontFamily || states.primary.title.fontFamily};
	font-size: ${props => states[props.state].title.fontSize || states.primary.title.fontSize};
	font-style: normal;
	font-weight: normal;
	letter-spacing: 0.08em;
	line-height: 1.5;
	display: flex;
	align-items: center;
	text-align: center;
	color: ${colorGray500};
`;

export const Text = styled.div`
	font-family: ${props => states[props.state].text.fontFamily || states.primary.text.fontFamily};
	font-size: ${fontSizeThird};
	line-height: 1.43;
	display: flex;
	align-items: center;
	text-align: center;
	color: ${colorGray400};
`;

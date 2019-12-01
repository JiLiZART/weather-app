import styled from '@emotion/styled';
import { breakpointMobile, colorInputGray300, sizeMd, sizeXxl } from '../variables';

export const Centered = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: ${sizeMd};

	@media (min-width: ${breakpointMobile}) {
		margin-bottom: ${sizeXxl};
	}

	:before,
	:after {
		position: absolute;
		top: 50%;
		display: block;
		content: '';
		width: calc(50% - 40px);
		height: 1px;
		transform: translateY(50%);
		background: ${colorInputGray300};
	}
	
	:before {
		left: 0;
	}
	
	:after {
		right: 0;
	}
`;

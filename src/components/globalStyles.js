import { css } from '@emotion/core';
import { colorGray300 } from './variables';

export default css`
	/* latin */
	@font-face {
	  font-family: 'PT Root UI';
	  font-style: normal;
	  font-weight: normal;
	  src:
		local('PT Root UI'),
		local('PTRootUI'),
		url(assets/fonts/PTRootUIRegular.woff2) format('woff2'),
		url(assets/fonts/PTRootUIRegular.woff) format('woff');
	  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
	  font-display: swap;
	}
	/* latin */
	@font-face {
	  font-family: 'Merriweather';
	  font-style: normal;
	  font-weight: normal;
	  src:
		local('Merriweather'),
		url(assets/fonts/Merriweather-Regular.woff2) format('woff2'),
		url(assets/fonts/Merriweather-Regular.woff) format('woff');
	  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
	  font-display: swap;
	}

	body {
		min-height: 100%;
		margin: 0;
		background: ${colorGray300};
	}
`;
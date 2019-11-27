import React from 'react';
import styled from '@emotion/styled';

const Icon = styled.div`
	display: flex;
	width: 24px;
	height: 24px;
`;

Icon.Search = (props) => (
	<Icon {...props}>
		<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd"
				  d="M13.663 6.112a5.221 5.221 0 10-.1 7.48.753.753 0 01.13-.127 5.221 5.221 0 00-.03-7.353zm1.524 7.931a6.722 6.722 0 10-1.07 1.052l5.35 5.422a.75.75 0 001.067-1.054l-5.347-5.42z"
				  fill="#fff"
			/>
		</svg>
	</Icon>
);

Icon.Search.displayName = 'Icon.Search';

Icon.Add = (props) => (
	<Icon {...props}>
		<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd"
				  d="M12 3.75A8.25 8.25 0 003.75 12 8.25 8.25 0 0012 20.25 8.25 8.25 0 0020.25 12 8.25 8.25 0 0012 3.75zM2.25 12A9.75 9.75 0 0112 2.25 9.75 9.75 0 0121.75 12 9.75 9.75 0 0112 21.75 9.75 9.75 0 012.25 12zM12 7.25a.75.75 0 01.75.75v3.25H16a.75.75 0 010 1.5h-3.25V16a.75.75 0 01-1.5 0v-3.25H8a.75.75 0 010-1.5h3.25V8a.75.75 0 01.75-.75z"
				  fill="#730641"
			/>
		</svg>
	</Icon>
);

Icon.Add.displayName = 'Icon.Add';

Icon.Remove = (props) => (
	<Icon {...props}>
		<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd"
				  d="M8.024 3.995A1.749 1.749 0 019.69 2.778h4.62c.76 0 1.434.492 1.666 1.216l.571 1.784H18c.019 0 .037 0 .055.002H19a.75.75 0 010 1.5h-.25v10.987a2.955 2.955 0 01-2.955 2.955h-7.59a2.955 2.955 0 01-2.955-2.955V7.28H5a.75.75 0 110-1.5h.945A.759.759 0 016 5.778h1.453l.57-1.783zM6.75 7.28v10.987c0 .804.651 1.455 1.455 1.455h7.59c.804 0 1.455-.651 1.455-1.455V7.28H6.75zm8.222-1.502H9.028l.424-1.326a.25.25 0 01.238-.174h4.62a.25.25 0 01.238.174l.424 1.326zM12 8.56a.75.75 0 01.75.75v8.27a.75.75 0 01-1.5 0V9.31a.75.75 0 01.75-.75zM9 9.72a.75.75 0 01.75.75v6.06a.75.75 0 01-1.5 0v-6.06A.75.75 0 019 9.72zm6 0a.75.75 0 01.75.75v6.06a.75.75 0 01-1.5 0v-6.06a.75.75 0 01.75-.75z"
				  fill="#272525"
			/>
		</svg>
	</Icon>
);

Icon.Remove.displayName = 'Icon.Remove';

export default Icon;

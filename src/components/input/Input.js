import React from 'react';
import { BaseInput, Content, Post, Pre } from './inputStyles';

const Input = ({ Postfix, Prefix, ...props }) => (
	<Content>
		{Prefix && <Pre>{Prefix}</Pre>}
		<BaseInput type="text" {...props} />
		{Postfix && <Post>{Postfix}</Post>}
	</Content>
);

export default Input;

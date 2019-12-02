import React from 'react';
import compose from 'recompose/compose';
import withStateHandlers from 'recompose/withStateHandlers';
import withHandlers from 'recompose/withHandlers';
import { KEY_ARROW_DOWN, KEY_ARROW_UP, KEY_ENTER, KEY_ESC } from '../../helpers/keycodes';
import { createExecuteMap, preventedEvent } from '../../helpers/event';
import { Autocomlete, Body, Wrapper } from './autocompleteStyles';

const Autocomplete = ({ children, renderAutocomplete, isFocused, ...props }) => (
	<Body>
		{children(props)}
		{renderAutocomplete && isFocused && (
			<Wrapper>
				<Autocomlete>{renderAutocomplete(props)}</Autocomlete>
			</Wrapper>
		)}
	</Body>
);

const defaultSearchIndex = -1;
const getSearchIndex = ({ index, deviation, data }) => {
	const stackLength = data.length;
	const resultIndex = index + deviation;

	if (resultIndex > stackLength) return defaultSearchIndex;
	if (resultIndex < defaultSearchIndex) return stackLength - 1;
	return resultIndex;
};

export default compose(
	withStateHandlers({
		isFocused: false,
		index: defaultSearchIndex
	}, {
		setFocus: () => isFocused => ({ isFocused }),
		changeSearchIndex: () => index => ({ index })
	}),
	withHandlers({
		onUp: props => () => {
			props.changeSearchIndex(getSearchIndex({ ...props, deviation: -1 }));
		},
		onDown: props => () => {
			props.changeSearchIndex(getSearchIndex({ ...props, deviation: 1 }));
		},
		onEscape: props => () => {
			props.changeSearchIndex(defaultSearchIndex);
		},
		onEnter: props => () => {
			props.onAutocompleteChange({ index: props.index, data: props.data });
		},
		onSetIndex: props => ({ index, ...rest }) => {
			if (props.data[index]) {
				props.changeSearchIndex(index);
				props.onAutocompleteChange({ index, data: props.data });
			}
		}
	}),
	withHandlers({
		onFocus: props => () => {
			props.setFocus(true);
		},
		onBlur: props => () => {
			setTimeout(() => {
				props.setFocus(false);
				setTimeout(() => {
					props.changeSearchIndex(defaultSearchIndex);
				});
			}, 200);
		},
		onKeyDown: props => (e) => {
			createExecuteMap({
				key: e.keyCode,
				map: {
					[KEY_ARROW_UP]: preventedEvent(props.onUp),
					[KEY_ARROW_DOWN]: preventedEvent(props.onDown),
					[KEY_ESC]: props.onEscape,
					[KEY_ENTER]: props.onEnter
				},
				props: [e]
			});
		}
	})
)(Autocomplete);

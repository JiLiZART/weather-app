import React from 'react';
import Button from '../components/button/Button';
import Icon from '../components/icon/Icon';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import withStateHandlers from 'recompose/withStateHandlers';
import AutocompleteInput from '../components/autocomplete/AutocompleteInput';

const SearchButton = () => (
	<Button state="primary"><Icon.Search /></Button>
);

const SearchInput = compose(
	withStateHandlers(
		{
			value: ''
		},
		{
			setValue: () => value => ({ value })
		}
	),
	withHandlers({
		onChange: props => e => {
			const { value } = e.target;

			props.setValue(value);

			if (props.onChange) {
				props.onChange(value);
			}
		},
		onAutocompleteChange: props => ({ index }) => {
			const item = props.data[index];

			props.setValue('');

			if (props.onAutocompleteChange) {
				props.onAutocompleteChange({ index, item });
			}
		}
	})
)(
	(props) => (
		<AutocompleteInput
			Postfix={<SearchButton />}
			{...props}
		/>
	)
);

export default SearchInput;

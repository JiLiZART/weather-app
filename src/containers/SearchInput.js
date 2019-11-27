import React from 'react';
import Button from '../components/button/Button';
import Icon from '../components/icon/Icon';
import { compose, withHandlers, withStateHandlers } from 'recompose';
import AutocompleteInput from '../components/autocomplete/AutocompleteInput';


const SearchButton = () => (
	<Button state="primary"><Icon.Search/></Button>
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
			props.setValue(e.target.value);
		},
		onAutocompleteChange: props => ({ index }) => {
			const item = props.data[index];

			props.setValue(item.title);

			if (props.onChange) {
				props.onChange({ item, index });
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
